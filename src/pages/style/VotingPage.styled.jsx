import styled from "styled-components";

export const Wrapper = styled.div`
position: relative;
margin-bottom: 52px;
`;

export const ImgBox = styled.div`
width: 100%;
height: 360px;
overflow: hidden;
border-radius: ${props => props.theme.borderRadiusMax};
`;

export const Img = styled.img`
width: 100%;
height: 100%;
object-fit: fill;
`;

export const Controls = styled.ul`
position: absolute;
bottom: 0;
left: 50%;
transform: translate(-50%, 50%);
display: inline-flex;
border: 4px solid #FFFFFF;
border-radius: ${props => props.theme.borderRadiusMax};
background-color: #fff;
overflow: hidden;
`;


export const Btn = styled.button`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
background-color: transparent;

& svg {
    fill: #fff;
}
`;


export const Item = styled.li`
width: 80px;
height: 80px;
margin-right: 4px;
display: flex;
justify-content: center;
align-items: center;

&:last-child {
  margin-right: 0;  
}

&:nth-child(1) {
background-color: #97EAB9;
}

&:nth-child(2) {
background-color:  ${props => props.theme.mainAccentColor};
}

&:nth-child(3) {
background-color: #FFD280;
}

&:hover, &:focus {

 &:nth-child(1) {
background-color: rgba(151, 234, 185, 0.3);
}

&:nth-child(2) {
background-color:  rgba(255, 134, 142, 0.3);
}

&:nth-child(3) {
background-color: rgba(255, 210, 128, 0.3);
}

&:nth-child(1) ${Btn} svg {
    fill: #97EAB9;
}

&:nth-child(2) ${Btn} svg {
    fill:  ${props => props.theme.mainAccentColor};
}

&:nth-child(3) ${Btn} svg {
    fill: #FFD280;
}
}

`;

export const Info = styled.ul`

& li {
    display: flex;
    padding: 15px 20px 15px;
    width: 100%;
    margin-bottom: 10px;
    background-color: #F8F8F7;
    border-radius: ${props => props.theme.borderRadiusMin};

    &:last-child {
       margin-bottom: 0; 
    }

}
`;
