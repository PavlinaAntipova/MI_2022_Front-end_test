import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { createBrowserHistory } from "history";

import SearchBar from "components/SearchBar/SearchBar";
import NavigationBtn from "components/NavigationBtn";

import { ReactComponent as Logo } from '../../images/icons/logo.svg';
import { ReactComponent as BackIcon } from '../../images/icons/back.svg';

import VotingImg from '../../images/vote-table/vote-table.png';
import BreedsImg from '../../images/pet-breeds/pet-breeds.png';
import GalleryImg from '../../images/images-search/images-search.png';

import { Description, Header, Item, List, StyledLayout, Text, Title, IntroBox, ContentBox, MainContent, BackBtnBox, BackBtn, CurrentLocation } from "./Layout.styled";

import { theme } from "helper/theme";


export default function Layout({setSearchQuery}) {
    const location = useLocation();
    const param = useParams();

    const getLocation = () => {
        const path = location?.pathname.slice(1);
        const pathLength = path.length;
        const idLength = param.breedId.length + 1;
        return location?.pathname.slice(1, `${pathLength - idLength}`);
    }

    let history = createBrowserHistory({ window });
   

    return <><StyledLayout>
        <IntroBox>
        <Header>
            <Link to='/'><Logo /></Link>
        </Header>
        
            <Title>Hi intern!</Title>
            <Description>Welcome to MI 2022 Front-end test</Description>
            <Text>Lets start using The Cat API</Text>
            <List>
                <Item><NavigationBtn path="/voting" text="Voting" img={{ path: VotingImg, width: 100, height: 125 }} bgColor="#B4B7FF" /></Item>
                <Item><NavigationBtn path="/breeds" text="Breeds" img={{ path: BreedsImg, width: 117, height: 163 }} bgColor="#97EAB9"/></Item>
                <Item><NavigationBtn path="/gallery" text="Gallery" img={{ path: GalleryImg, width: 112, height: 190 }} bgColor="#FFD280"/></Item>
            </List>
        </IntroBox>

        <MainContent>
        {location?.pathname !== "/" && <SearchBar setSearchQuery={setSearchQuery} />}
            <ContentBox location={location}>
                {location?.pathname !== "/" && <BackBtnBox>
                    <BackBtn onClick={() => { history.back() }} type="button" style={
                        { bgColor: { static: theme.secondaryAccentColor, active: theme.mainAccentColor }, svgColor: { static: theme.mainAccentColor, active: "#fff" } }
                    }><BackIcon /></BackBtn>
                    <CurrentLocation location={param.breedId}>{param.breedId ? getLocation() : location?.pathname.slice(1)}</CurrentLocation>
                    {param.breedId && <CurrentLocation>{param.breedId}</CurrentLocation>}
                    
                </BackBtnBox>}
                
            <Outlet/>
            </ContentBox>
        </MainContent>

    </StyledLayout>
        
    </>
}