import { BasicText } from "helper/Common.styled";
import styled from "styled-components";

export const StyledLayout = styled.div`
position: sticky;
width: 45%;
padding-left: 145px;

`;

export const Header = styled.header`
padding-top: 30px;
margin-bottom: 80px;
`;

export const Title = styled.h1`
margin-bottom: 10px;
font-weight: 500;
font-size: 44px;
line-height: 1.3em;
`;

export const Description = styled(BasicText)`
margin-bottom: 60px;
`;


export const Text = styled(BasicText)`
font-weight: 500;
color: ${props => props.theme.darkTextColor};
margin-bottom: 20px;
`;

export const List = styled.ul`
display: flex;
`;

export const Item = styled.li`
margin-right: 15px;
outline: 1px solid red;

&:last-child {
    margin-right: 0;
}

`;

