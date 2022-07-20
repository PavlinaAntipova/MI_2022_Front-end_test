import styled from "styled-components";

import bg from '../../images/modal/upload-bg.png'

export const Modal = styled.div`
position: absolute;
top: 30px;
right: 30px;
bottom: 30px;
padding: 100px 20px;
width: 680px;
background-color: #F8F8F7;
border-radius: ${props => props.theme.borderRadiusMax};
overflow-y: scroll;
text-align: center;
`;
export const CloseBtn = styled.button`
position: absolute;
top: 20px;
right: 20px;
padding: 11px;
display: flex;
justify-content: center;
align-items: center;
background-color: #FFFFFF;
border-radius: ${props => props.theme.borderRadiusMin};

& svg {
    fill: ${props => props.theme.mainAccentColor};
}

&:hover, &:focus {
    background-color: ${props => props.theme.mainAccentColor};
    & svg {
        fill: #fff;
    }
}
`;

export const Title = styled.h2`
font-weight: 500;
font-size: 36px;
line-height: 1.44em;
margin-bottom: 10px;
`

export const Text = styled.p`
font-size: 20px;
line-height: 1.5em;
color: ${props => props.theme.lightTextColor};
margin-bottom: 40px;

& a {
    color: ${props => props.theme.mainAccentColor};
}
`;

export const UploadArea = styled.div`
position: relative;
padding: 20px 40px;
width: 100%;
height: 320px;
margin-bottom: 20px;
background-color: #FFFFFF;
border: 2px dashed #FBE0DC;
border-radius: ${props => props.theme.borderRadiusMax};

${props => {
    if (!props.isSelected) {
        return `background-image: url(${bg});
    background-repeat: no-repeat;
    background-position: center;`
    }
}}


${props => {
    if (props.isUpload === false) {
        return `background-color: ${props.theme.secondaryAccentColor};
        border: 2px dashed ${props.theme.mainAccentColor};`
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
    border-radius: ${props => props.theme.borderRadiusMin};
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
color: ${props => props.theme.lightTextColor};

& span {
    font-weight: 500;
    color: ${props => props.theme.darkTextColor};
}
`;

export const UploadAvailability = styled.p`
font-size: 20px;
line-height: 1.5em;
color: ${props => props.theme.lightTextColor};
margin-bottom: 20px;
`;

export const UploadStatus = styled.p`
display: flex;
align-items: center;
justify-content: flex-start;
padding: 18px 20px;
background-color: #FFFFFF;
border-radius: ${props => props.theme.borderRadiusMin};
font-size: 16px;
line-height: 1.5em;
color: ${props => props.theme.lightTextColor};

& svg {
    margin-right: 10px;
}
`;

export const UploadBtn = styled.button`
display: inline-flex;
align-items: center;
justify-content: center;
padding: 12px 30px;
font-weight: 500;
font-size: 12px;
line-height: 1.33em;
letter-spacing: 2px;
color: #FFFFFF;
text-transform: uppercase;
background-color: ${props => props.theme.mainAccentColor};
border-radius: ${props => props.theme.borderRadiusMin};

& svg {
    margin-right: 10px;
}

&:hover {
    color: ${props => props.theme.mainAccentColor};
    background-color: ${props => props.theme.secondaryAccentColor};
}

&:focus {
    background-color: ${props => props.theme.mainAccentColor};
    color: #FFFFFF;
}
`;






