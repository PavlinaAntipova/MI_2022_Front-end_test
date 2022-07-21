import styled from "styled-components";

import { BasicBtn } from "components/Btn/Btn.styled";
import { BasicText } from "helper/Common.styled";


export const StyledLayout = styled.div`
padding: 30px 30px 30px 145px;
display: flex;
`;

export const IntroBox = styled.div`
position: sticky;
top: 30px;
width: 40%;
margin-right: 135px;
height: 100%;
`;



export const Header = styled.header`
margin-bottom: 80px;
display: flex;
justify-content: space-between;
align-items: center;
`;

export const Title = styled.h1`
margin-bottom: 10px;
font-weight: 500;
font-size: 44px;
line-height: 1.3em;
color: ${props => props.theme.common.mainTextColor};
`;

export const Description = styled(BasicText)`
margin-bottom: 60px;
`;


export const Text = styled(BasicText)`
font-weight: 500;
color: ${props => props.theme.common.mainTextColor};
margin-bottom: 20px;
`;

export const List = styled.ul`
display: flex;
margin: -15px;
`;

export const Item = styled.li`
margin: 15px;
flex-basis: calc(100% / 3 - 30px);


&:last-child {
    margin-right: 0;
}

`;

export const ContentBox = styled.div`
position: relative;
min-height: 840px;
${props => {
    if (props.location.pathname === "/") {
            return `
            background-color: ${props.theme.HomePage.contentBgColor};
            `;
    } else {
        return `
            padding: 20px;
            background-color:${props.theme.common.mainContextBgColor};
            `;
        }
}
    };

width: 680px;
border-radius: ${props => props.theme.common.borderRadiusMax};
`;

export const MainContent = styled.div`
`;

export const BackBtnBox = styled.div`
display: inline-block;
margin-bottom: 20px;
`;

export const BackBtn = styled(BasicBtn)`
margin-right: 10px;
`;

export const CurrentLocation = styled.span`
display: inline-block;
padding: 7px 30px;
background-color: ${props => props.theme.common.mainAccentColor};
border-radius: ${props => props.theme.common.borderRadiusMin};
font-weight: 500;
font-size: 20px;
line-height: 1.5em;
letter-spacing: 2px;
color: #FFFFFF;
text-transform: uppercase;

&:first-of-type {
${props => {
        if (props.location) {
            return `
            margin-right: 10px;
            color: ${props.theme.common.mainAccentColor};
       background-color: ${props.theme.PreviousLocationBtn.bgColor};
        `
        }
    }}
}`;











