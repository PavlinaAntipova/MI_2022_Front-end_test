import { useEffect, useState } from "react";
import moment from "moment";
import { toast } from "react-toastify";


import LogItem from "components/LogItem";
import Loader from "components/Loader";

import { deleteFavourite, doVote, getFavourite, getRandomCat, getVoting, makeFavourite } from "services/catsApi";

import { ReactComponent as LikeIcon } from '../images/icons/like.svg';
import { ReactComponent as DislikeIcon } from '../images/icons/dislike.svg';
import { ReactComponent as FavouriteIcon } from '../images/icons/fav.svg';
import { ReactComponent as FavouriteFullIcon } from '../images/icons/fav-full.svg';

import { Btn, Controls, Img, Item, ImgBox, Wrapper } from "./style/VotingPage.styled";


export default function VotingPage({ userId }) {
    const [randomCat, setRandomCat] = useState();
    const [isFavourite, setIsFavourite] = useState(false);
    const [isVoted, setIsVoted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [favorites, setFavorites] = useState([]);
  
    const [deletedFavourites, setDeletedFavourites] = useState([]);
    const [history, setHistory] = useState([]);


    useEffect(() => {
         const deletedFavouritesStorage = JSON.parse(localStorage.getItem('deletedFavourites'));
         if (deletedFavouritesStorage === null) {
            setDeletedFavourites([]);
        } else {
            setDeletedFavourites(deletedFavouritesStorage);
         }
     }, []);


    useEffect(() => {
        fetchData().then(data => {
            setHistory(createHistory(data, deletedFavourites)); setFavorites(data.favourite);
        }).catch(err => {
            console.log(err.message);
            toast("🙀 Ooops, something went wrong! Try again.");
        });
    }, [isFavourite, isVoted, deletedFavourites]);

    useEffect(() => {
        setIsLoading(true);
        getRandomCat().then(data => setRandomCat(data[0])).catch(err => {
            console.log(err.message);
            toast("🙀 Ooops, something went wrong! Try again.");
        }).finally(() => { setIsFavourite(false); setIsVoted(false); setIsLoading(false); });
    }, [isVoted]);

    async function fetchData() {
    const favourite = await getFavourite(userId);
    const voting = await getVoting(userId);
    return { favourite, voting };
    }
    
    function createHistory({ voting, favourite }, deleted) {
        const today = moment().get('date');
        const history = [...voting, ...favourite, ...deleted].filter(item => today === moment(item.created_at).get('date'));
        history.sort((a, b) => {
            if (a?.deleted_at && b?.deleted_at) {
                return new Date(b.deleted_at) - new Date(a.deleted_at);
            }
            if (a?.deleted_at && !b?.deleted_at) {
                return new Date(b.created_at) - new Date(a.deleted_at);
            }
            if (!a?.deleted_at && b?.deleted_at) {
                return new Date(b.deleted_at) - new Date(a.created_at);
            }
            if (!a?.deleted_at && !b?.deleted_at) {
                return new Date(b.created_at) - new Date(a.created_at);
            }
            
        });
        return history;
    }

    const onVotingBtnClick = value => {
        doVote({ image_id: randomCat?.id, value, sub_id: userId});
        setIsVoted(true);
    }

    const findFavourite = imgid => {
        const cat = favorites.find(favorite => favorite.image_id === imgid);
        return cat;
    }

    return <div>
    
            
        <Wrapper>
            <ImgBox>
            {isLoading ? <Loader/> : <Img src={randomCat?.url} alt="Random Cat" width="640" height="360"/>}
            
        </ImgBox>
        
        <Controls>
            <Item>
                <Btn type="button" onClick={() => {
                        onVotingBtnClick(1);
                }}><LikeIcon /></Btn>
            </Item>
            <Item>
                    <Btn type="button" onClick={() => {
                        if (isFavourite === false) {
                    
                        makeFavourite({ image_id: randomCat.id, sub_id: userId }).then(() => {
                            setIsFavourite(true);
                        });
                        }

                        if (isFavourite === true) {
                            const deletedCat = findFavourite(randomCat?.id);
                            deleteFavourite(deletedCat.id).then(() => {
                                setIsFavourite(false);
                                localStorage.setItem('deletedFavourites', JSON.stringify([...deletedFavourites, { ...deletedCat, isDeleted: true, deleted_at: new Date() }]));
                                setDeletedFavourites([...deletedFavourites, { ...deletedCat, isDeleted: true, deleted_at: new Date() }]);
                            }).catch(err => {
                                console.log(err.message);
                                toast("🙀 Ooops, something went wrong! Try again.");
                            });
                        }
                        
                    }}>
                        {isFavourite ? <FavouriteFullIcon /> : <FavouriteIcon />}
                    </Btn>
            </Item>
            <Item>
                <Btn type="button" onClick={() => {
                        onVotingBtnClick(0);
                }}><DislikeIcon/></Btn>
            </Item>
        </Controls>
        </Wrapper>

         <ul>
            {history && history.map(item => <LogItem key={item.id} item={item} />
            )}
        </ul>
        
               
        
    </div>

}