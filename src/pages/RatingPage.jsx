import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getFavourite, getVoting } from "services/catsApi";

export default function RatingPage() {
    const [catsData, setCatsData] = useState([]);
    const location = useLocation().pathname;

    useEffect(() => {
        if (location === "/favourites") {
            getFavourite().then(setCatsData);
        }
        if (location === "/likes" || location === "/dislikes") {
            getVoting().then(setCatsData);
        }
        
    }, [location]);



    return <>
        {!catsData.length && <p>No item found</p>}
    </>
}