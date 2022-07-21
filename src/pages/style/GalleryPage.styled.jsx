import styled from "styled-components";

export const Form = styled.form`
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-column-gap: 20px;
grid-row-gap: 10px;
padding: 10px 20px 20px;
margin-bottom: 20px;
width: 100%;
background-color: ${props => props.theme.GalleryPage.sortingFormBgColor};
border-radius: ${props => props.theme.common.borderRadiusMax};
`;

export const Label = styled.label`
display: block;
font-weight: 500;
font-size: 10px;
line-height: 1.8em;
color: ${props => props.theme.common.secondaryTextColor};
text-transform: uppercase;
`;

export const Select = styled.select`
padding: 8px 10px;
display: block;
width: 100%;
background-color: #FFFFFF;
border-radius: ${props => props.theme.common.borderRadiusMin};
font-size: 16px;
line-height: 1.5em;
color: ${props => props.theme.common.mainTextColor};
background-color: ${props => props.theme.GalleryPage.selectorBgColor};
border: none;
outline: none;
cursor: pointer;

&:hover, &:focus {
   outline: ${props => props.theme.GalleryPage.outline};
}
`;

export const UpdateBtn = styled.button`
margin-left: auto;
display: flex;
align-items: center;
justify-content: center;
padding: 10px;
background-color: ${props => props.theme.GalleryPage.btnUpdateBgColor};
border-radius: ${props => props.theme.common.borderRadiusMin};

& svg {
    fill: ${props => props.theme.common.mainAccentColor};
}

&:hover, &:focus {
    background-color: ${props => props.theme.common.mainAccentColor};
    & svg {
        fill: #fff;
    }
}
`;

export const UploadBtn = styled.button`
position: absolute;
right: 20px;
display: inline-flex;
align-items: center;
justify-content: center;
padding: 14px 30px;
background-color: ${props => props.theme.GalleryPage.btnUploadBgColor};
border-radius: ${props => props.theme.common.borderRadiusMin};
font-weight: 500;
font-size: 12px;
line-height: 1.33em;
letter-spacing: 2px;
color: ${props => props.theme.common.mainAccentColor};
text-transform: uppercase;

& svg {
    margin-right: 10px;
    fill: ${props => props.theme.common.mainAccentColor};
}

&:hover, &:focus {
    background-color: ${props => props.theme.common.mainAccentColor};
    color: #fff;

    & svg {
        fill: #fff;
    }
}
`;

export const BtnBox = styled.div`
display: flex;
align-items: flex-end;

& label {
margin-right: 10px;
width: 90%;
}
`;
