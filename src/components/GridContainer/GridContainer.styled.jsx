import styled from "styled-components";

export const Container = styled.ul`
@media screen and (min-width: 768px) {
display: grid;
grid-template-rows: auto;
grid-gap: 20px;
}
@media screen and (min-width: 768px) and (max-width: 1439px)  {
grid-template-columns: repeat(2, 1fr);
}

@media screen and (min-width: 1440px) {
grid-template-columns: repeat(3, 1fr);
grid-auto-flow: dense;
}
`;
