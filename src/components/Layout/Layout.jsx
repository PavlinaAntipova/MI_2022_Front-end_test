import { useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { createBrowserHistory } from "history";
import { useMediaQuery } from 'react-responsive';

import SearchBar from "components/SearchBar/SearchBar";

import { ReactComponent as LogoLight } from '../../images/icons/logo-light.svg';
import { ReactComponent as LogoDark } from '../../images/icons/logo-dark.svg';
import { ReactComponent as BackIcon } from '../../images/icons/back.svg';


import { Description, Header, StyledLayout, Text, Title, IntroBox, ContentBox, MainContent, BackBtnBox, BackBtn, CurrentLocation } from "./Layout.styled";

import SwitcherThemeBtn from "components/SwitcherThemeBtn";
import Navigation from "components/Navigation";
import MobileMenu from "components/MobileMenu";



export default function Layout({setSearchQuery, setDarkTheme, isDarkTheme}) {
    const location = useLocation();
    const param = useParams();
    const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const getLocation = () => {
        const path = location?.pathname.slice(1);
        const pathLength = path.length;
        const idLength = param.breedId.length + 1;
        return location?.pathname.slice(1, `${pathLength - idLength}`);
    }

      const toggleMobileMenu = () => {
        setShowMobileMenu(prevState => !prevState);
  }

    let history = createBrowserHistory({ window });

    return <><StyledLayout>
        {isDesktop ? <>
            <IntroBox>
                <Header>
                    <Link to='/'>{isDarkTheme ? <LogoDark /> : <LogoLight />}</Link>
                    <SwitcherThemeBtn setDarkTheme={setDarkTheme} isDarkTheme={isDarkTheme} />
                </Header>
        
               <Title>Hi there!</Title>
                <Description>Welcome to Cats World.</Description>
                <Text>Lets start!</Text>
                <Navigation/>
            </IntroBox>

            <MainContent>
                {location?.pathname !== "/" && <SearchBar setSearchQuery={setSearchQuery} />}
                <ContentBox location={location}>
                    {location?.pathname !== "/" && <BackBtnBox>
                        <BackBtn onClick={() => { history.back() }} type="button"><BackIcon /></BackBtn>
                        <CurrentLocation location={param.breedId}>{param.breedId ? getLocation() : location?.pathname.slice(1)}</CurrentLocation>
                        {param.breedId && <CurrentLocation>{param.breedId}</CurrentLocation>}
                    
                    </BackBtnBox>}
                
                    <Outlet />
                </ContentBox>
            </MainContent>
        </> : <>
                {location?.pathname === "/" ?  <IntroBox>
                <Header location={location?.pathname}>
                    <Link to='/'>{isDarkTheme ? <LogoDark /> : <LogoLight />}</Link>
                    <SwitcherThemeBtn setDarkTheme={setDarkTheme} isDarkTheme={isDarkTheme} />
                </Header>
        
                <Title>Hi there!</Title>
                <Description>Welcome to Cats World.</Description>
                <Text>Lets start!</Text>
                <Navigation/>
            </IntroBox> : <> <Header>
                    <Link to='/'>{isDarkTheme ? <LogoDark /> : <LogoLight />}</Link>
                    <SwitcherThemeBtn setDarkTheme={setDarkTheme} isDarkTheme={isDarkTheme} />
                    </Header>
                        <MainContent>
                        {location?.pathname !== "/" && <SearchBar setSearchQuery={setSearchQuery} toggleMobileMenu={toggleMobileMenu} />}
                <ContentBox location={location}>
                    {location?.pathname !== "/" && <BackBtnBox>
                        <BackBtn onClick={() => { history.back() }} type="button"><BackIcon /></BackBtn>
                        <CurrentLocation location={param.breedId}>{param.breedId ? getLocation() : location?.pathname.slice(1)}</CurrentLocation>
                        {param.breedId && <CurrentLocation>{param.breedId}</CurrentLocation>}
                    
                    </BackBtnBox>}
                
                    <Outlet />
                </ContentBox>
                        </MainContent>
                </>}
                {showMobileMenu && <MobileMenu toggleMobileMenu={toggleMobileMenu}/>}
        </>
        }
        
    </StyledLayout>
        
    </>
}