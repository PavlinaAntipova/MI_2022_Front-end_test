import styled from "styled-components";

import { BasicBtn } from "components/Btn/Btn.styled";
import { BasicText } from "helper/Common.styled";


export const StyledLayout = styled.div`
padding: 20px;

@media screen and (min-width: 768px) {
padding: 30px;

${props => {
    if (props.location === "/") {
        return `width: 60%;
margin-left: auto;
margin-right: auto;`;
    } else {
        return `width: 100%`;
    } }};
}

@media screen and (max-width: 1439px) {
display: flex;
justify-content: center;
padding: 30px;
}

@media screen and (min-width: 1440px) {
padding: 30px 30px 30px 145px;
display: flex;
}

`;

export const IntroBox = styled.div`
@media screen and (min-width: 1440px) {
position: sticky;
top: 30px;
width: 40%;
margin-right: 135px;
height: 100%;
}
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


export const ContentBox = styled.div`
position: relative;
width: 100%;
padding: 20px;
background-color: ${props => props.theme.common.mainContextBgColor};
border-radius: ${props => props.theme.common.borderRadiusMax};
min-height: 100vh;

@media screen and (min-width: 1440px) {
min-height: 840px;
width: 680px;

${props => {
    if (props.location.pathname === "/") {
        return `
            padding: 0;
            background-color: ${props.theme.HomePage.contentBgColor};
            `;
    } else {
        return `
            padding: 20px;
            `;
        }
}
    };
}
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
text-align: center;

&:first-of-type {
${props => {
        if (props.location) {
            return `
            margin-bottom: 10px;
            color: ${props.theme.common.mainAccentColor};
            background-color: ${props.theme.PreviousLocationBtn.bgColor};
        `
        }
    }}
}

@media screen and (max-width: 1439px) {
&:last-of-type {
    ${props => {
        if (props.location) {
            return `
            position: relative;
            left: 50px;
            width: 130px;
        `
        }
    }}
}
}

@media screen and (min-width: 1440px) {
    margin-right: 10px;
    &:first-of-type {
${props => {
        if (props.location) {
            return `
            margin-bottom: 0;
        `
        }
    }}
}
}
`;











