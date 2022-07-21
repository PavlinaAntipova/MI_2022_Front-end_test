import styled from "styled-components";

export const SelectsBox = styled.div`
@media screen and (max-width: 1439px) {
display: grid;
grid-template-columns: 1fr 40px 40px;
grid-template-rows: 40px 40px;
grid-gap: 10px;
margin-bottom: 10px;
}

@media screen and (min-width: 1440px) {
display: inline-flex;
align-items: center;
}
`;

export const Select = styled.select`
padding: 8px 10px;
border-radius: ${props => props.theme.common.borderRadiusMin};
font-size: 16px;
line-height: 1.5em;
color: ${props => props.theme.common.secondaryTextColor};
outline: none;
border: ${props => props.theme.BreedPage.border};
background-color: ${props => props.theme.BreedPage.bgColor};
cursor: pointer;

@media screen and (max-width: 1439px) {
    &:first-of-type {
   grid-column: 1 / 4;
} 

}


@media screen and (min-width: 1440px) {
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
border-radius: ${props => props.theme.common.borderRadiusMin};
background-color: ${props => props.theme.BreedPage.bgColor};
border: ${props => props.theme.BreedPage.border};

& svg {
        fill: ${props => props.theme.common.secondaryTextColor};
    }

&:hover, &:focus {
   border: ${props => props.theme.BreedPage.outline};

   & svg {
    fill:  ${props => props.theme.common.mainAccentColor};
   }
}

@media screen and (min-width: 1440px) {
    &:first-of-type {
        margin-right: 10px;
    }
    
}
`