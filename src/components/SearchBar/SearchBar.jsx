import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { ReactComponent as SearchIcon } from '../../images/icons/search.svg';
import { ReactComponent as LikeIcon } from '../../images/icons/like.svg';
import { ReactComponent as FavoriteIcon } from '../../images/icons/fav.svg';
import { ReactComponent as DislikeIcon } from '../../images/icons/dislike.svg';

import { Input, Item, Link, List, SearchForm, StyledBtn, StyledSearchBar } from "./SearchBar.styled";
import { theme } from "helper/theme";



export default function SearchBar({setSearchQuery}) {
    const [inputValue, setInputValue] = useState("");
    const location = useLocation().pathname;
    const navigate = useNavigate();

    return <StyledSearchBar>
        <SearchForm onSubmit={e => {
            e.preventDefault();
            setSearchQuery(inputValue.trim());
            
            if (location !== "/search") {
                navigate('/search');
            }
            setInputValue("");
            
        }}>
            
            <Input type="text" placeholder="Search for breeds by name" value={inputValue} onChange={e => setInputValue(e.target.value)} pattern="[a-zA-Z]+"/>
            <StyledBtn style={{
    bgColor: { static: theme.secondaryAccentColor, active: theme.mainAccentColor }, svgColor: {static: theme.mainAccentColor, active: "#fff"}
}} type="submit"><SearchIcon width="20" height="20"/></StyledBtn>
    </SearchForm>
     <List>
            <Item><Link to="/likes"><LikeIcon width="30" height="30"/></Link></Item>
            <Item><Link to="/favourites"><FavoriteIcon width="30" height="30"/></Link></Item>
            <Item><Link to="/dislikes"><DislikeIcon width="30" height="30"/></Link></Item>
        </List>
        </StyledSearchBar>
}


