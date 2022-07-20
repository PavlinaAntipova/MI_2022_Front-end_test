import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

import { getFavourite, getVoting, catById, deleteFavourite } from "services/catsApi";

import GridContainer from "components/GridContainer";
import GridItem from "components/GridItem";
import LogItem from "components/LogItem";
import Loader from "components/Loader";

import { ReactComponent as FavIcon } from '../images/icons/fav.svg';
import { ReactComponent as FullFavIcon } from '../images/icons/fav-full.svg';

import { NotFoundText } from "./style/RatingPage.styled";
import { Info } from "./style/RatingPage.styled";

import { theme } from "helper/theme";
import { gridRows } from "helper/styleHelper";

export default function RatingPage() {
    const [favourite, setFavourite] = useState([]);
    const [likes, setLikes] = useState([]);
    const [dislikes, setDislikes] = useState([]);
    const [images, setImages] = useState({});
    
    const [deletedFavourites, setDeletedFavourites] = useState([]);
    const [historyFavourites, setHistoryFavourites] = useState([]);
    
    const location = useLocation().pathname;
    const [isLoading, setIsLoading] = useState(false);
  

    useEffect(() => {

        setIsLoading(true);
        fetchAllCatsImages().then(() => {
            fetchAllData().then((favourite) => {
                const getLocalStorage = JSON.parse(localStorage.getItem('deletedFavourites'));

                if (getLocalStorage === null) {
                    return { favourite, deleted: [] };
                } 

                if (favourite.length === 0) {
                    localStorage.setItem('deletedFavourites', JSON.stringify([]));
                    return { favourite, deleted: [] };
                }

                setDeletedFavourites(getLocalStorage);
                return { favourite, deleted: getLocalStorage };
            }).then((data) => {
                setHistoryFavourites(createHistory(data.favourite, data.deleted));
            }).catch(err => {
            console.log(err.message);
            toast("🙀 Ooops, something went wrong! Try again.");
        }).finally(() => setIsLoading(false));
        });
       


        async function fetchAllData() {
            fetchVotingData();
            return fetchFavoriteData();
        }

        async function fetchVotingData() {
            const allVoltingData = await getVoting();
            const votingDataLikes = await likesCats(allVoltingData);
            const votingDataDislikes = await dislikesCats(allVoltingData);
            setLikes(votingDataLikes);
            setDislikes(votingDataDislikes);
        }
        
        async function fetchFavoriteData() {
          const allFavouriteData = await getFavourite();
            setFavourite(allFavouriteData);
            return allFavouriteData;
        }

        async function fetchAllCatsImages() {
            const images = {};
            const allVoltingData = await getVoting();
            allVoltingData.forEach(item => {
                images[item.image_id] = "";
            });
            Object.keys(images).forEach(id => {
                catById(id).then(data => images[data.id] = data.url);
            });
            setImages(images);
        }

        function likesCats(data) {
       return data.filter(item => item.value);
    }

        function dislikesCats(data) {
        return data.filter(item => !item.value);
    }
    }, []);

    useEffect(() => {
        setHistoryFavourites(createHistory(favourite, deletedFavourites));
        
     }, [deletedFavourites, favourite]);
    
    const handleClick = e => {
        const itemId = e.currentTarget.dataset.id;
        if (isActiveBtn(itemId)) {
            deleteFavourite(itemId).then(() => {
                localStorage.setItem('deletedFavourites', JSON.stringify([...deletedFavourites, { ...findDeletedItem(itemId), isDeleted: true }]))
                setFavourite(updateData(itemId));
             }).catch(err => {
            console.log(err.message);
            toast("🙀 Ooops, something went wrong! Try again.");
        });
        } 
    }

    const isActiveBtn = (id) => {
        return deletedFavourites.find(item => item.id == id) ? false : true;
    }
    

    const updateData = (id) => favourite.filter(item => item.id != id);

    const findDeletedItem = (id) => favourite.find(item => item.id == id);

    const createHistory = (favourite, deleted) => {
    const history = [...favourite, ...deleted];
    history.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    return history;
    }
    
    
    return <>
        {isLoading ? <Loader /> : <> {
            <>
                {(location === "/favourites" && !favourite.length) ? <NotFoundText>No item found</NotFoundText> :
                    <>
                        <GridContainer>
                            {(location === "/favourites" && favourite.length > 0) && favourite.map((item, index) =>
                                <GridItem index={index} key={item.id} amountData={favourite.length} gridRows={gridRows}>
                                     <div></div>
                                    <button data-id={item.id} type="button" onClick={handleClick}>
                                    {isActiveBtn(item.id) ? <FullFavIcon width="20" height="20" fill={theme.mainAccentColor}/> : <FavIcon fill={theme.mainAccentColor} />}
                                    </button>
                                    <img src={item.image?.url} alt="cat" loading="lazy"/>
                                </GridItem>)}
                        </GridContainer>
                        {(location === "/favourites" && historyFavourites.length > 0) && <Info>
                            {historyFavourites.map(item => <LogItem key={item.id} item={item} />)}
                        </Info>}
                    </>
                }

                {(location === "/likes" && !likes.length) ? <NotFoundText>No item found</NotFoundText> :
                    <GridContainer>
                        {(location === "/likes" && likes.length > 0) && likes.map((item, index) => <GridItem index={index} key={item.id} amountData={likes.length} gridRows={gridRows}><img src={images[item.image_id]} alt="cat" loading="lazy"/></GridItem>)}
                    </GridContainer>
                }

                {(location === "/dislikes" && !likes.length) ? <NotFoundText>No item found</NotFoundText> :
                    <GridContainer>
                        {(location === "/dislikes" && dislikes.length > 0) && dislikes.map((item, index) => <GridItem index={index} key={item.id} amountData={dislikes.length} gridRows={gridRows}><img src={images[item.image_id]} alt="cat" loading="lazy"/></GridItem>)}
                    </GridContainer>
                }
            </>
        }
        </>
        }
    </>
}