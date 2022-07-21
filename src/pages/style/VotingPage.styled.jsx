import styled from "styled-components";

export const Wrapper = styled.div`
position: relative;
margin-bottom: 52px;
`;

export const ImgBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 165px;
overflow: hidden;
border-radius: ${props => props.theme.common.borderRadiusMax};

@media screen and (min-width: 768px) {
    height: 375px;
}

@media screen and (min-width: 1440px) {
     height: 360px;
}
`;

export const Img = styled.img`
width: 100%;
height: 100%;
object-fit: fill;
`;

export const Controls = styled.ul`
position: absolute;
bottom: 0;
left: 50%;
transform: translate(-50%, 50%);
display: inline-flex;
border: ${props => props.theme.VotingPage.controlsBorder};
border-radius: ${props => props.theme.common.borderRadiusMax};
background-color: #fff;
overflow: hidden;
`;


export const Btn = styled.button`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
background-color: transparent;

& svg {
width: 20px;
height: 20px;
    fill: #fff;

    @media screen and (min-width: 768px) {
    width: 30px;
    height: 30px;
}
}
`;


export const Item = styled.li`
width: 60px;
height: 60px;
margin-right: 3px;
display: flex;
justify-content: center;
align-items: center;

@media screen and (min-width: 768px) {
margin-right: 4px;
width: 80px;
height: 80px;
}

&:last-child {
  margin-right: 0;  
}

&:nth-child(1) {
background-color: #97EAB9;
}

&:nth-child(2) {
background-color:  ${props => props.theme.common.mainAccentColor};
}

&:nth-child(3) {
background-color: #FFD280;
}

&:hover, &:focus {

 &:nth-child(1) {
background-color: rgba(151, 234, 185, 0.3);
}

&:nth-child(2) {
background-color:  rgba(255, 134, 142, 0.3);
}

&:nth-child(3) {
background-color: rgba(255, 210, 128, 0.3);
}

&:nth-child(1) ${Btn} svg {
    fill: #97EAB9;
}

&:nth-child(2) ${Btn} svg {
    fill:  ${props => props.theme.common.mainAccentColor};
}

&:nth-child(3) ${Btn} svg {
    fill: #FFD280;
}
}

`;

