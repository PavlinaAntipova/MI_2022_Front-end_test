import styled from "styled-components";

export const InfoBox = styled.div`
position: relative;
padding: 40px;
margin-top: 50px;
border: 2px solid ${props => props.theme.secondaryAccentColor};
border-radius: ${props => props.theme.borderRadiusMax};
`;

export const List = styled.ul`
display: grid;
grid-template-columns: 1fr 1fr;
justify-content: center;

`;

export const Item = styled.li`
margin-bottom: 10px;

&:first-child {
    grid-row: 1 / 4;
    margin-bottom: 0;
    margin-right: 20px;
}

&:last-child {
    margin-bottom: 0;
}

`;


export const Name = styled.h3`
position: absolute;
top: 0;
left: 50%;
transform: translate(-50%, -50%);
padding: 5px 40px;
font-weight: 500;
font-size: 36px;
line-height: 1.44em;
background-color: #fff;
border-radius: ${props => props.theme.borderRadiusMax};
text-align: center;

`;

export const Text = styled.p`
margin-bottom: 20px;
font-weight: 500;
font-size: 20px;
line-height: 1.45em;
text-align: center;
color: ${props => props.theme.lightTextColor};
`;


export const FeatureInfo = styled.p`
font-size: 16px;
line-height: 1.44em;
color: ${props => props.theme.lightTextColor};
`;

export const Feature = styled.span`
font-weight: 500;
color: ${props => props.theme.darkTextColor};
`;
