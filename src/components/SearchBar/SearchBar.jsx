import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';

import { ReactComponent as SearchIcon } from '../../images/icons/search.svg';
import { ReactComponent as LikeIcon } from '../../images/icons/like.svg';
import { ReactComponent as FavoriteIcon } from '../../images/icons/fav.svg';
import { ReactComponent as DislikeIcon } from '../../images/icons/dislike.svg';
import { ReactComponent as MobileMenuIcon } from '../../images/icons/mobile-menu.svg';

import { Input, Item, Link, List, SearchForm, StyledBtn, StyledSearchBar, MenuBtn } from "./SearchBar.styled";



export default function SearchBar({setSearchQuery, toggleMobileMenu}) {
    const [inputValue, setInputValue] = useState("");
    const location = useLocation().pathname;
    const navigate = useNavigate();
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1439px)' });

    return <StyledSearchBar>
        {isTabletOrMobile && <MenuBtn type="button" onClick={()=>toggleMobileMenu()}><MobileMenuIcon/></MenuBtn>}
        <SearchForm onSubmit={e => {
            e.preventDefault();
            setSearchQuery(inputValue.trim());
            
            if (location !== "/search") {
                navigate('/search');
            }
            setInputValue("");
            
        }}>
            
            <Input type="text" placeholder="Search for breeds by name" value={inputValue} onChange={e => setInputValue(e.target.value)} pattern="[a-zA-Z]+"/>
            <StyledBtn type="submit"><SearchIcon width="20" height="20"/></StyledBtn>
    </SearchForm>
     <List>
            <Item><Link to="/likes"><LikeIcon width="30" height="30"/></Link></Item>
            <Item><Link to="/favourites"><FavoriteIcon width="30" height="30"/></Link></Item>
            <Item><Link to="/dislikes"><DislikeIcon width="30" height="30"/></Link></Item>
        </List>
        </StyledSearchBar>
}


