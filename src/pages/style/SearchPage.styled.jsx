import styled from "styled-components";

export const QueryText = styled.p`
font-size: 20px;
line-height: 1.45em;
color: ${props => props.theme.lightTextColor};
margin-bottom: 20px;

& span {
    color: ${props => props.theme.darkTextColor};
}
`;