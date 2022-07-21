import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { BasicBtn } from "components/Btn/Btn.styled";

export const StyledSearchBar = styled.div`
display: flex;
margin-bottom: 10px;
`;

export const SearchForm = styled.form`
position: relative;
width: 470px;
margin-right: 10px;
`;

export const Input = styled.input`
display: block;
width: 100%;
height: 100%;
padding: 15px 20px;
background: #FFFFFF;
border-radius: ${props => props.theme.common.borderRadiusMax};
border: none;
background-color: ${props => props.theme.common.mainContextBgColor};
color: ${props => props.theme.common.secondaryTextColor};

&::placeholder {
font-weight: 400;
font-size: 20px;
line-height: 1.45em;
color: ${props => props.theme.common.secondaryTextColor};
}

&:focus {
    outline: ${props => props.theme.SearchBar.outlineFocus};
}

&:hover {
    outline: ${props => props.theme.SearchBar.outlineHover};

}
`;


export const List = styled.ul`
display: flex;
`;

export const Item = styled.li`
margin-right: 10px;
background-color: ${props => props.theme.common.mainContextBgColor};
border-radius: ${props => props.theme.common.borderRadiusMax};


&:last-child {
margin-right: 0;
}
`;

export const Link = styled(NavLink)`
padding: 15px;
    display: block;
    height: 100%;
    width: 100%;
    border-radius: ${props => props.theme.common.borderRadiusMax};

    & svg {
        fill: ${props => props.theme.common.mainAccentColor};
    }

&:hover, &:focus {
        background-color: ${props => props.theme.common.secondaryAccentColor};
    }

 &.active {
        background-color: ${props => props.theme.common.mainAccentColor};

         & svg {
        fill: #fff;
    }
    }
`;


export const StyledBtn = styled(BasicBtn)`
position: absolute;
right: 10px;
top: 50%;
transform: translateY(-50%);
`;

