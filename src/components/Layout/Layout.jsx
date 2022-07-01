import NavigationBtn from "components/NavigationBtn";
import { Link, Outlet } from "react-router-dom";

import { ReactComponent as Logo } from '../../images/icons/logo.svg';

import VotingImg from '../../images/vote-table/vote-table.png';
import BreedsImg from '../../images/pet-breeds/pet-breeds.png';
import GalleryImg from '../../images/images-search/images-search.png';



export default function Layout() {
    return <>
        <header>
            <Link to='/'><Logo /></Link>
        </header>
        <div>
            <h1>Hi intern!</h1>
            <p>Welcome to MI 2022 Front-end test</p>
            <p>Lets start using The Cat API</p>
            <ul>
                <li><NavigationBtn path="/voting" text="Voting" img={VotingImg} /></li>
                <li><NavigationBtn path="/breeds" text="Breeds" img={BreedsImg}/></li>
                <li><NavigationBtn path="/gallery" text="Gallery" img={GalleryImg}/></li>
            </ul>
        </div>
        <Outlet/>
    </>
}