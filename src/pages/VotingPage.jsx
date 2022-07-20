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


export default function VotingPage() {
    const [randomCat, setRandomCat] = useState();
    const [isFavourite, setIsFavourite] = useState(false);
    const [isVoted, setIsVoted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [favorites, setFavorites] = useState([]);
  
    const [deletedFavourites, setDeletedFavourites] = useState([]);
    const [history, setHistory] = useState([]);

    useEffect(() => {
         const getLocalStorage = JSON.parse(localStorage.getItem('deletedFavourites'));
         if (getLocalStorage === null) {
            setDeletedFavourites([]);
        } else {
            setDeletedFavourites(getLocalStorage);
         }
     }, []);


    useEffect(() => {
       
        setIsLoading(true);
        fetchData().then(data => {
            setHistory(createHistory(data, deletedFavourites)); setFavorites(data.favourite);
        }).catch(err => {
            console.log(err.message);
            toast("🙀 Ooops, something went wrong! Try again.");
        }).finally(() => {
            setIsLoading(false);
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
    const favourite = await getFavourite();
    const voting = await getVoting();
    return { favourite, voting };
    }
    
    function createHistory({ voting, favourite }, deleted) {
        const today = moment().get('date');
        const history = [...voting, ...favourite, ...deleted].filter(item => today === moment(item.created_at).get('date'));
        history.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        return history;
    }

    const onVotingBtnClick = value => {
        doVote({ image_id: randomCat?.id, value });
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
                    
                        makeFavourite({ image_id: randomCat.id }).then(() => {
                            setIsFavourite(true);
                        });
                        }

                        if (isFavourite === true) {
                            const deletedCat = findFavourite(randomCat?.id);
                            deleteFavourite(deletedCat.id).then(() => {
                                setIsFavourite(false);
                                localStorage.setItem('deletedFavourites', JSON.stringify([...deletedFavourites, { ...deletedCat, isDeleted: true }]));
                                setDeletedFavourites([...deletedFavourites, { ...deletedCat, isDeleted: true }]);
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

        {isLoading ? null : <ul>
            {history && history.map(item => <LogItem key={item.id} item={item} />
            )}
        </ul>}
        
               
        
    </div>

}