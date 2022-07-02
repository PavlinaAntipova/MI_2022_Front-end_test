import styled from "styled-components";

export const BasicBtn = styled.button`
padding: 10px;
border-radius: ${props => props.theme.borderRadiusMin};
background-color: ${props => props.style.bgColor.static};

& svg {
        fill: ${props => props.style.svgColor.static};
    }


&:hover, &:focus {
    background-color: ${props => props.style.bgColor.active};

    & svg {
        fill: ${props => props.style.svgColor.active};
    }
}
`;
