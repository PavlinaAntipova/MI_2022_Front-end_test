import HomeImg from '../images/homePage/homeImg.png';
import { ContentBox, Img } from './style/HomePage.styled';


export default function HomePage() {
    return <ContentBox>
        <Img src={HomeImg} alt="Girl and pet" />
    </ContentBox>
    
}