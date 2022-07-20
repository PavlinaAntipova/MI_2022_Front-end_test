import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Mousewheel, Keyboard } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

import { toast } from 'react-toastify';

import { getImgsByBreed } from "services/catsApi";

import { Feature, FeatureInfo, InfoBox, Item, List, Name, Text } from "./style/BreedInfoPage.styled";
import { Img, ImgBox } from "pages/style/VotingPage.styled";

import Loader from "components/Loader";

export default function BreedInfoPage() {
    const location = useLocation();
    const breed = location.state;
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

        }).catch(err => {
            console.log(err.message);
            toast("🙀 Ooops, something went wrong! Try again.")

    useEffect(() => {
        setIsLoading(true);
        getImgsByBreed(breed.id).then(data => {
            setImages(data);
        }).finally(() => { setIsLoading(false) });
    }, []);

    return <>

        <Swiper slidesPerView={1} modules={[Pagination, A11y, Mousewheel, Keyboard]} pagination={{ clickable: true}} mousewheel={true} keyboard={true} loop={true}>
            {images.map(item => <SwiperSlide key={item.id}>
                <ImgBox>
                    <Img src={item.url} alt={breed.name} width="640" height="360"/>
                </ImgBox>

            </SwiperSlide>)}
    </Swiper>

        <InfoBox>
            <Name><nobr>{breed.name}</nobr></Name>
            <Text>{breed.description}</Text>
            <List>
                <Item><FeatureInfo><Feature>Temperament:</Feature><br/> {breed.temperament }</FeatureInfo></Item>
                <Item><FeatureInfo><Feature>Origin:</Feature> {breed.origin }</FeatureInfo></Item>
                <Item><FeatureInfo><Feature>Weight:</Feature> {breed.weight.metric} kg</FeatureInfo></Item>
                <Item><FeatureInfo><Feature>Life span:</Feature> {breed.life_span} years</FeatureInfo></Item>
            </List>
        </InfoBox>
    </>
 }