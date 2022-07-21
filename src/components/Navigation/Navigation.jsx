import VotingImg from '../../images/vote-table/vote-table.png';
import BreedsImg from '../../images/pet-breeds/pet-breeds.png';
import GalleryImg from '../../images/images-search/images-search.png';

import NavigationBtn from "components/NavigationBtn";
import { Item, StyledNavigation } from './Navigation.styled';

export default function Navigation() {
    return <StyledNavigation>
        <Item><NavigationBtn path="/voting" text="Voting" img={{ path: VotingImg, width: 100, height: 125 }} bgColor="#B4B7FF" /></Item>
        <Item><NavigationBtn path="/breeds" text="Breeds" img={{ path: BreedsImg, width: 117, height: 163 }} bgColor="#97EAB9" /></Item>
        <Item><NavigationBtn path="/gallery" text="Gallery" img={{ path: GalleryImg, width: 112, height: 190 }} bgColor="#FFD280" /></Item>
    </StyledNavigation>
    
}