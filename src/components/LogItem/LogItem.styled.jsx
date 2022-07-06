import styled from "styled-components";

export const Log = styled.li`
display: flex;
align-items: center;
    padding: 15px 20px 15px;
    width: 100%;
    margin-bottom: 10px;
    background-color: #F8F8F7;
    border-radius: ${props => props.theme.borderRadiusMin};

    &:last-child {
       margin-bottom: 0; 
    }
`;
export const Time = styled.span`
display: inline-block;
padding: 3px 10px;
color: ${props => props.theme.darkTextColor};
background-color: #fff;
border-radius: 5px;
margin-right: 20px;
`;

export const Text = styled.p`
font-size: 16px;
line-height: 1.5em;
 color: ${props => props.theme.lightTextColor};
 margin-right: auto;
`;

export const Id = styled.span`
font-weight: 500;
color: ${props => props.theme.darkTextColor};
`;