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
border-radius: ${props => props.theme.borderRadiusMin};
font-size: 16px;
line-height: 1.5em;
color: ${props => props.theme.lightTextColor};
outline: none;
border: 2px solid  #F8F8F7;
cursor: pointer;

&:last-of-type {
    margin-right: 10px;
}

&:hover, &:focus {
   outline: 2px solid #FBE0DC;
}
`;

export const Btn = styled.button`
display: flex;
align-items: center;
justify-content: center;
padding: 10px;
background-color: #F8F8F7;
border-radius: ${props => props.theme.borderRadiusMin};
border: 2px solid  #F8F8F7;

&:first-of-type {
    margin-right: 10px;
}

& svg {
        fill: ${props => props.theme.lightTextColor};
    }

&:hover, &:focus {
   border: 2px solid #FBE0DC;

   & svg {
    fill:  ${props => props.theme.mainAccentColor};
   }
}
`