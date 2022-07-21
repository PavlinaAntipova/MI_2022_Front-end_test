import styled from "styled-components";

export const BasicBtn = styled.button`
padding: 10px;
border-radius: ${props => props.theme.common.borderRadiusMin};
background-color: ${props => props.theme.Button.staticBgColor};

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
