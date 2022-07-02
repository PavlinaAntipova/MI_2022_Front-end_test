import { BasicText } from "helper/Common.styled";
import styled from "styled-components";

export const StyledLayout = styled.div`
padding: 30px 30px 30px 145px;
display: flex;
`;

export const IntroBox = styled.div`
position: sticky;
top: 30px;
width: 40%;
margin-right: 135px;
height: 100%;
`;



export const Header = styled.header`
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
margin: -15px;
`;

export const Item = styled.li`
margin: 15px;
flex-basis: calc(100% / 3 - 30px);


&:last-child {
    margin-right: 0;
}

`;









