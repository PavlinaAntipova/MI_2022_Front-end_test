import { useState } from "react";
import { useEffect } from "react"
import { doVote, getFavouriteHistory, getRandomCat, getVotingHistory, makeFavourite } from "services/catsApi";

import { ReactComponent as LikeIcon } from '../images/icons/like.svg';
import { ReactComponent as DislikeIcon } from '../images/icons/dislike.svg';
import { ReactComponent as FavouriteIcon } from '../images/icons/fav.svg';
import { ReactComponent as FavouriteFullIcon } from '../images/icons/fav-full.svg';
import { Btn, Controls, Img, ImgBox, Info, Item, Wrapper } from "./style/VotingPage.styled";

export default function VotingPage() {
    const [randomCat, setRandomCat] = useState();
    const [isFavourite, setIsFavourite] = useState(false);
    const [isVoted, setIsVoted] = useState(false);

    useEffect(() => {
        getRandomCat().then(data => setRandomCat(data[0])).finally(() => { setIsFavourite(false); setIsVoted(false); });
        
    }, [isVoted]);

    const onVotingBtnClick = value => {
        doVote({ image_id: randomCat?.id, value });
        setIsVoted(true);
    }

    return <>
        <Wrapper>
        <ImgBox>
            <Img src={randomCat?.url} alt="Random Cat" />
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