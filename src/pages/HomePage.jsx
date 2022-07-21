import { useMediaQuery } from 'react-responsive';

import HomeImg from '../images/homePage/homeImg.png';
import { Img } from './style/HomePage.styled';


export default function HomePage() {
    const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });

    return <>
        {isDesktop && <Img src={HomeImg} alt="Girl and pet" />}
    </>
}