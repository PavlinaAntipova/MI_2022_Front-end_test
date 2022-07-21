import styled from "styled-components";

import bgLight from '../../images/modal/upload-bg-light.svg';
import bgDark from '../../images/modal/upload-bg-dark.svg';

export const Modal = styled.div`
position: absolute;
top: 0;
right: 0;
left: 0;
bottom: 0;
padding: 100px 20px;
background-color: ${props => props.theme.Modal.bgColor};
overflow-y: scroll;
text-align: center;

@media screen and (min-width: 1440px) {
top: 30px;
right: 30px;
bottom: 30px;  
width: 680px; 
border-radius: ${props => props.theme.common.borderRadiusMax};
}

`;
export const CloseBtn = styled.button`
width: 60px;
height: 60px;
position: absolute;
top: 20px;
right: 20px;
padding: 11px;
display: flex;
justify-content: center;
align-items: center;
background-color: ${props => props.theme.Modal.closeBtnBgColor};
border-radius: ${props => props.theme.common.borderRadiusMin};

@media screen and (min-width: 1440px) {
width: 40px;
height: 40px;
}


& svg {
    fill: ${props => props.theme.common.mainAccentColor};
    width: 25px;
height: 25px;

    @media screen and (min-width: 1440px) {
width: 17px;
height: 17px;
}
}

&:hover, &:focus {
    background-color: ${props => props.theme.common.mainAccentColor};
    & svg {
        fill: #fff;
    }
}
`;

export const Title = styled.h2`
font-weight: 500;
font-size: 20px;
line-height: 1.45em;
margin-bottom: 10px;
color: ${props => props.theme.common.mainTextColor};

 @media screen and (min-width: 1440px) {
    font-size: 36px;
line-height: 1.45em;
 }
`

export const Text = styled.p`
font-size: 20px;
line-height: 1.5em;
color: ${props => props.theme.common.secondaryTextColor};
margin-bottom: 40px;

& a {
    color: ${props => props.theme.common.mainAccentColor};
}
`;

export const UploadArea = styled.div`
position: relative;
padding: 10px 20px;
width: 100%;
height: 170px;
margin-bottom: 20px;
border-radius: ${props => props.theme.common.borderRadiusMax};
background-color: ${props => props.theme.Modal.uploadAreaBgColor};
border: ${props => props.theme.Modal.uploadAreaBorder};
background-size: 100px 100px;

${props => {
    if (!props.isSelected) {
        if (props.isDarkTheme) {
             return `background-image: url(${bgDark});
    background-repeat: no-repeat;
    background-position: center;`
        } 
        return `background-image: url(${bgLight});
    background-repeat: no-repeat;
    background-position: center;`
       
    }
}}

 @media screen and (min-width: 1440px) {
    padding: 20px 40px;
    height: 320px;
    background-size: 200px 200px;
 }


${props => {
    if (props.isUpload === false) {
        return `background-color: ${props.theme.Modal.uploadAreaBgFailColor};
        border: 2px dashed ${props.theme.common.mainAccentColor};`
        }
}
    }

& input {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        opacity: 0;
        cursor: pointer;
}

`;

export const ImgBox = styled.div`
    height: 100%;
    border: 1px solid #FBE0DC;
    border-radius: ${props => props.theme.common.borderRadiusMin};
    overflow: hidden;

    & img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}
`;

export const UploadText = styled.p`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
font-weight: 400;
font-size: 20px;
line-height: 1.5em;
color: ${props => props.theme.common.secondaryTextColor};

& span {
    font-weight: 500;
    color: ${props => props.theme.common.mainTextColor};
}
`;

export const UploadAvailability = styled.p`
font-size: 20px;
line-height: 1.5em;
color: ${props => props.theme.common.secondaryTextColor};
margin-bottom: 20px;
`;

export const UploadStatus = styled.p`
display: flex;
align-items: center;
justify-content: flex-start;
padding: 18px 20px;
background-color: ${props => props.theme.common.mainContextBgColor};
border-radius: ${props => props.theme.common.borderRadiusMin};
font-size: 16px;
line-height: 1.5em;
color: ${props => props.theme.common.secondaryTextColor};
text-align: left;

& svg {
    margin-right: 10px;
}
`;

export const UploadBtn = styled.button`
display: flex;
align-items: center;
justify-content: center;
padding: 12px 30px;
font-weight: 500;
font-size: 12px;
line-height: 1.33em;
letter-spacing: 2px;
color: #FFFFFF;
text-transform: uppercase;
background-color: ${props => props.theme.common.mainAccentColor};
border-radius: ${props => props.theme.common.borderRadiusMin};

@media screen and (max-width: 1439px) {
width: 100%;
}

@media screen and (min-width: 1440px) {
    display: inline-flex;
}

& svg {
    margin-right: 10px;
}

&:hover {
    color: ${props => props.theme.common.mainAccentColor};
    background-color: ${props => props.theme.common.secondaryAccentColor};
}

&:focus {
    background-color: ${props => props.theme.common.mainAccentColor};
    color: #FFFFFF;
}
`;






