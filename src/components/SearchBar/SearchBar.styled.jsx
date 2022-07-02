
import { BasicBtn } from "components/Btn/Btn.styled";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledSearchBar = styled.div`
display: flex;
margin-bottom: 10px;
`;

export const SearchBox = styled.form`
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
border-radius: ${props => props.theme.borderRadiusMax};
border: none;

&::placeholder {
font-weight: 400;
font-size: 20px;
line-height: 1.45em;
color: ${props => props.theme.lightTextColor};
}

&:focus {
    outline: 2px solid ${props => props.theme.mainAccentColor};
}

&:hover {
    outline: 2px solid ${props => props.theme.secondaryAccentColor};

}
`;


export const List = styled.ul`
display: flex;
`;

export const Item = styled.li`
margin-right: 10px;
background-color: #FFFFFF;
border-radius: ${props => props.theme.borderRadiusMax};


&:last-child {
margin-right: 0;
}
`;

export const Link = styled(NavLink)`
padding: 15px;
    display: block;
    height: 100%;
    width: 100%;
    border-radius: ${props => props.theme.borderRadiusMax};

    & svg {
        fill: ${props => props.theme.mainAccentColor};
    }

&:hover, &:focus {
        background-color: ${props => props.theme.secondaryAccentColor};
    }

 &.active {
        background-color: ${props => props.theme.mainAccentColor};

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

