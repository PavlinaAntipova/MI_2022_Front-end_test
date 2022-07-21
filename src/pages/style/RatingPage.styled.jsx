import styled from "styled-components";

export const NotFoundText = styled.p`
padding: 18px 20px;
background-color: ${props => props.theme.NotFoundText.bgColor};
border-radius: ${props => props.theme.common.borderRadiusMin};
color: ${props => props.theme.common.secondaryTextColor};
font-size: 16px;
line-height: 1.5em;
`;

export const Info = styled.ul`
margin-top: 40px;
`;