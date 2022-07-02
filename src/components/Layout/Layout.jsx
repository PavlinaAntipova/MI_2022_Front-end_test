import NavigationBtn from "components/NavigationBtn";
import { Link, Outlet, useLocation } from "react-router-dom";
import { createBrowserHistory } from "history";

import { ReactComponent as Logo } from '../../images/icons/logo.svg';
import { ReactComponent as BackIcon } from '../../images/icons/back.svg';

import VotingImg from '../../images/vote-table/vote-table.png';
import BreedsImg from '../../images/pet-breeds/pet-breeds.png';
import GalleryImg from '../../images/images-search/images-search.png';
import { Description, Header, Item, List, StyledLayout, Text, Title, IntroBox, ContentBox, MainContent, BackBtnBox } from "./Layout.styled";
import SearchBar from "components/SearchBar/SearchBar";
import { useEffect } from "react";




export default function Layout() {
    const location = useLocation();

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
        {location?.pathname !== "/" && <SearchBar />}
            <ContentBox location={location}>
                {location?.pathname !== "/" && <BackBtnBox>
                    <button onClick={() => { history.back() } type="button"><BackIcon/></button>
                    <span>{location?.pathname.slice(1)}</span>
                </BackBtnBox>}
                
            <Outlet/>
            </ContentBox>
        </MainContent>

    </StyledLayout>
        
        

    </>
}