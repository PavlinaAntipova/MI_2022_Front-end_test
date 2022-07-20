import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import GridContainer from "components/GridContainer";
import GridItem from "components/GridItem";
import Loader from "components/Loader";

import { searchBreed } from "services/catsApi";

import { NotFoundText } from "./style/RatingPage.styled";
import { QueryText } from "./style/SearchPage.styled";

import { gridRows } from "helper/styleHelper";

export default function SearchPage({ searchQuery, breeds }) {
    const [foundCats, setFoundCats] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!searchQuery) return;

        setIsLoading(true);
        searchBreed(searchQuery).then(cats => {
            const searchedCats = cats.map(cat => {
                for (const breed of breeds) {
                    if (cat.id === breed.id) return breed;
                }
            });
            setFoundCats(searchedCats);
       
        }).catch(err => {
            console.log(err.message);
            toast("🙀 Ooops, something went wrong! Try again.");
        }).finally(() => setIsLoading(false));
            
        }, [searchQuery]);
        
        const filterCats = () => foundCats.filter(item => item !== undefined);
        


        return (
            <> {searchQuery && <QueryText>Search results for: <span>{`${searchQuery}`}</span></QueryText>}

                {isLoading ? <Loader /> : <>
                    {filterCats().length > 0 ? <GridContainer>
                    
                        {filterCats().map((item, index) => <GridItem index={index} key={item?.image?.url} amountData={filterCats().length} gridRows={gridRows}><Link to={`/breeds/${item?.id}`} state={{ ...item }}><img src={item?.image?.url ? item?.image?.url : "https://cdn.pixabay.com/photo/2016/03/17/06/49/renovation-1262389_1280.png"} alt={item?.name} loading="lazy"/><p>{item?.name}</p></Link></GridItem>)}
                    </GridContainer> : <>{searchQuery && <NotFoundText> No items found</NotFoundText>}</>}
                </>
                }
            
            </>
        )
}