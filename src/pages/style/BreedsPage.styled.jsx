import styled from "styled-components";

export const SelectsBox = styled.div`
margin-left: 10px;
display: inline-flex;
align-items: center;
`;

export const Select = styled.select`
padding: 8px 10px;
margin-right: 20px;
background-color: #F8F8F7;
border-radius: ${props => props.theme.common.borderRadiusMin};
font-size: 16px;
line-height: 1.5em;
color: ${props => props.theme.common.secondaryTextColor};
outline: none;
border: ${props => props.theme.BreedPage.border};
background-color: ${props => props.theme.BreedPage.bgColor};
cursor: pointer;

&:last-of-type {
    margin-right: 10px;
}

&:hover, &:focus {
   outline: ${props => props.theme.BreedPage.outline};
}
`;

export const Btn = styled.button`
display: flex;
align-items: center;
justify-content: center;
padding: 10px;
background-color: #F8F8F7;
border-radius: ${props => props.theme.common.borderRadiusMin};
background-color: ${props => props.theme.BreedPage.bgColor};
border: ${props => props.theme.BreedPage.border};

&:first-of-type {
    margin-right: 10px;
}

& svg {
        fill: ${props => props.theme.common.secondaryTextColor};
    }

&:hover, &:focus {
   border: ${props => props.theme.BreedPage.outline};

   & svg {
    fill:  ${props => props.theme.common.mainAccentColor};
   }
}
`