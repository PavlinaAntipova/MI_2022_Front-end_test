import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getFavourite, getVoting, catById } from "services/catsApi";
import { Circles } from 'react-loader-spinner';
import { theme } from "helper/theme";
import { NotFoundText } from "./style/RatingPage.styled";

export default function RatingPage() {
    const [favourite, setFavourite] = useState([]);
    const [likes, setLikes] = useState([]);
    const [dislikes, setDislikes] = useState([]);
    const [images, setImages] = useState({});

    const location = useLocation().pathname;
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        fetchAllCatsImages().then(data => { setImages(data); setIsLoading(true); });
        fetchFavoriteData().finally(() => setIsLoading(false));
        fetchVotingDataByType(likesCats).then(data => { setLikes(data); }).finally(() => setIsLoading(false));
        fetchVotingDataByType(dislikesCats).then(data => { setDislikes(data); }).finally(() => setIsLoading(false));


            async function fetchFavoriteData() {
            const allFavouriteData = await getFavourite();
            setFavourite(allFavouriteData);
        }

        async function fetchVotingDataByType(typeCallback) {
              const allVoltingData = await getVoting();  
              const votingDataByType = await typeCallback(allVoltingData);
              return votingDataByType;
        }
        
        async function fetchCatsImage(id) {
            const image = await catById(id);
            return image;
        }

        async function fetchAllCatsImages() {
            const images = {};
            const allVoltingData = await getVoting();  
            allVoltingData.forEach(item => {
                images[item.image_id] = "";
            });
            Object.keys(images).forEach(item => {
                fetchCatsImage(item).then(data => images[data.id] = data.url);
            });
            return images;
        }
     }, []);
    




    const likesCats = (data) => {
       return data.filter(item => item.value);
    }

    const dislikesCats = (data) => {
        return data.filter(item => !item.value);
    }

    
    return <>
    
        {isLoading ? <Circles height="80" width="80" color={theme.mainAccentColor} ariaLabel='loading'
        /> : <>
        <ul>
                    {location === "/likes" && likes.map(item => <li key={item.id}><img src={images[item.image_id]} alt="cat" /></li>
                    )}

            {location === "/dislikes" && dislikes.map(item => <li key={item.id}><img src={images[item.image_id]} alt="cat" /></li>)}
            {location === "/favourites" && favourite.map(item => <li key={item.id}><img src={item.image?.url} alt="cat" /></li>)}
                </ul>
                {(location === "/favourites" && !favourite.length) && <NotFoundText>No item found</NotFoundText>}
                {(location === "/likes" && !likes.length) && <NotFoundText>No item found</NotFoundText>}
                {(location === "/dislikes" && !dislikes.length) && <NotFoundText>No item found</NotFoundText>}
        </>}

    </>
}