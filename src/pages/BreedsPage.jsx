import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

import GridContainer from "components/GridContainer";
import GridItem from "components/GridItem";
import Loader from "components/Loader";

import { gridRows } from "helper/styleHelper";

import { getBreedsWithConditions, getOneBreedByParams } from "services/catsApi";

import { ReactComponent as AscSortIcon } from '../images/icons/sort.svg';
import { ReactComponent as DecSortIcon } from '../images/icons/revert.svg';
import { Select, Btn, SelectsBox } from "./style/BreedsPage.styled";



export default function BreedsPage({breeds}) {
    const [cats, setCats] = useState(breeds);
    const [isLoading, setIsLoading] = useState(false);
    const location = useLocation().pathname;
    const [breed, setBreed] = useState('');
    const [order, setOrder] = useState('');
    const [limit, setLimit] = useState('');


    useEffect(() => {
        if ((order || limit) && !breed) {
        setIsLoading(true);
        getBreedsWithConditions(limit, order).then(setCats).catch(err => {
            console.log(err.message);
            toast("🙀 Ooops, something went wrong! Try again.");
        }).finally(() => setIsLoading(false));
        }

        if (breed) {
        setIsLoading(true);
        getOneBreedByParams(breed).then(setCats).catch(err => {
            console.log(err.message);
            toast("🙀 Ooops, something went wrong! Try again.");
        }).finally(() => setIsLoading(false));
        }
        
        if ((order || limit) && breed) {
        setIsLoading(true);
        getOneBreedByParams(breed, limit, order).then(setCats).catch(err => {
            console.log(err.message);
            toast("🙀 Ooops, something went wrong! Try again.");
        }).finally(() => setIsLoading(false));
        }
    }, [order, limit, breed]);

    const handleSelect = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        
        switch (name) {
            case "breed":
                setBreed(value);
                return;
            case "limit":
                setLimit(value);
                return;
            default: return;
        }
    }

    const handleClick = (e) => {
        setOrder(e.currentTarget.name);
    }

    
    return (<>
             {location === "/breeds" ? <> <SelectsBox>
            <Select name="breed" value={breed} onChange={handleSelect}>
                <option value="">All breeds</option>
                {breeds.map(breed => <option key={breed.id} value={breed.id}>{breed.name}</option>)}
            </Select>
        <Select name="limit" value={limit} onChange={handleSelect}>
                <option value="5">Limit: 5</option>
                <option value="10">Limit: 10</option>
                <option value="15">Limit: 15</option>
                <option value="20">Limit: 20</option>
        </Select>
        <Btn type="button" name="Desc" onClick={handleClick}><AscSortIcon/></Btn>
        <Btn type="button" name="Asc" onClick={handleClick}><DecSortIcon/></Btn>
        </SelectsBox>
       
        {isLoading ? <Loader/> : <GridContainer>

                {cats.map((item, index) => {
                    if (item?.breeds) {
                        return <GridItem index={index} key={item.id} amountData={cats.length} gridRows={gridRows}>
                            <Link to={item.breeds[0].id} state={{ ...item.breeds[0] }}><img src={item?.url ? item?.url : "https://cdn.pixabay.com/photo/2016/03/17/06/49/renovation-1262389_1280.png"} alt={item.breeds[0].name} loading="lazy"/><p>{item.breeds[0].name}</p></Link>
                        </GridItem>
                }
                return <GridItem index={index} key={item.id} amountData={cats.length} gridRows={gridRows}><Link to={item.id} state={{ ...item }}><img src={item?.image?.url ? item?.image?.url : "https://cdn.pixabay.com/photo/2016/03/17/06/49/renovation-1262389_1280.png"} alt={item.name} loading="lazy"/><p>{item.name}</p></Link></GridItem>
            })}
            </GridContainer> } </> : <Outlet/>}
            </>);
}


