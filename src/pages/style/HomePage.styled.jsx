import styled from "styled-components";

export const Img = styled.img`
right: 0;
position: absolute;
`;

export const ContentBox = styled.div`
height: 840px;
width: 680px;
background-color: ${props => props.theme.secondaryAccentColor};
border-radius: ${props => props.theme.borderRadiusMax};
`;