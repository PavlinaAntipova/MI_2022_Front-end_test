import { NavLink } from "react-router-dom";

import { ReactComponent as SearchIcon } from '../../images/icons/search.svg';
import { ReactComponent as LikeIcon } from '../../images/icons/like.svg';
import { ReactComponent as FavoriteIcon } from '../../images/icons/fav.svg';
import { ReactComponent as DislikehIcon } from '../../images/icons/dislike.svg';
import { Btn, Input, Item, Link, List, SearchBox, StyledSearchBar } from "./SearchBar.styled";

export default function SearchBar() {

    return <StyledSearchBar>
        <SearchBox>
            <Input type="text" placeholder="Search for breeds by name"/>
            <Btn type="submit"><SearchIcon width="20" height="20"/></Btn>
    </SearchBox>
     <List>
            <Item><Link to="/likes"><LikeIcon width="30" height="30"/></Link></Item>
            <Item><Link to="/favourites"><FavoriteIcon width="30" height="30"/></Link></Item>
            <Item><Link to="/dislikes"><DislikehIcon width="30" height="30"/></Link></Item>
        </List>
        </StyledSearchBar>
}