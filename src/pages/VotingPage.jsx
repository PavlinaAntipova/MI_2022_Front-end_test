import { useState } from "react";
import { useEffect } from "react"
import { doVote, getRandomCat, makeFavourite } from "services/catsApi";
import { Circles } from 'react-loader-spinner';


import { ReactComponent as LikeIcon } from '../images/icons/like.svg';
import { ReactComponent as DislikeIcon } from '../images/icons/dislike.svg';
import { ReactComponent as FavouriteIcon } from '../images/icons/fav.svg';
import { ReactComponent as FavouriteFullIcon } from '../images/icons/fav-full.svg';
import { Btn, Controls, Img, ImgBox, Info, Item, Wrapper } from "./style/VotingPage.styled";
import { theme } from "helper/theme";

export default function VotingPage() {
    const [randomCat, setRandomCat] = useState();
    const [isFavourite, setIsFavourite] = useState(false);
    const [isVoted, setIsVoted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getRandomCat().then(data => setRandomCat(data[0])).finally(() => { setIsFavourite(false); setIsVoted(false); setIsLoading(false); });
        
    }, [isVoted]);

    const onVotingBtnClick = value => {
        doVote({ image_id: randomCat?.id, value });
        setIsVoted(true);
    }

    return <div>
        {isLoading ? <Circles
            height="80"
            width="80"
            color={theme.mainAccentColor}
            ariaLabel='loading'
        /> : <>
            
        <Wrapper>
        <ImgBox>
            <Img src={randomCat?.url} alt="Random Cat" width="640" height="360"/>
        </ImgBox>
        
        <Controls>
            <Item>
                <Btn type="button" onClick={() => {
                    onVotingBtnClick(1)
                }}><LikeIcon /></Btn>
            </Item>
            <Item>
                <Btn type="button" onClick={() => {
                        makeFavourite({ image_id: randomCat.id });
                        setIsFavourite(!isFavourite);
                    }}>
                        {isFavourite ? <FavouriteFullIcon /> : <FavouriteIcon />}
                    </Btn>
            </Item>
            <Item>
                <Btn type="button" onClick={() => {
                     onVotingBtnClick(0)
                }}><DislikeIcon/></Btn>
            </Item>
        </Controls>
        </Wrapper>


        <Info>
                
        </Info>
                </>
        }
    </div>

}