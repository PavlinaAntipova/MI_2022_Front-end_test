import styled from "styled-components";

export const Container = styled.ul`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: auto;
grid-auto-flow: dense;
grid-gap: 20px;

`;