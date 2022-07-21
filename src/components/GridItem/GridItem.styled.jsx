import styled from "styled-components";

export const Item = styled.li`
position: relative;
background-color: #C4C4C4;
border-radius: ${props => props.theme.common.borderRadiusMax};
height: 210px;
overflow: hidden;

@media screen and (max-width: 767px) {
margin-bottom: 10px;

&:last-child {
   margin-bottom: 10px; 
}
}

@media screen and (min-width: 1440px) {
    height: 140px;
}

& button {
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
display: flex;
align-items: center;
justify-content: center;
width: 40px;
height: 40px;
background-color: ${props => props.theme.GridItem.btnHoverBgColor};
border-radius: ${props => props.theme.common.borderRadiusMin};
opacity: 0;

}

& div::before {
content: '';
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
background-color: rgba(255, 134, 142, 0.6);
opacity: 0;
}

&:hover, &:focus {
    & div::before, & button {
        opacity: 1;
    }
}


& p {
position: absolute;
bottom: 10px;
left: 50%;
transform: translateX(-50%);
z-index: 3;
padding: 5px 0;
width: 90%;
font-size: 16px;
line-height: 1.5em;
text-align: center;
color: ${props => props.theme.common.mainAccentColor};
background-color: ${props => props.theme.GridItem.btnHoverBgColor};
border-radius: ${props => props.theme.common.borderRadiusMin};
opacity: 0;
}

& a::before {
content: '';
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
background-color: rgba(255, 134, 142, 0.6);
opacity: 0;
}

& a:hover, & a:focus {
    &::before, & p {
        opacity: 1;
    }
}

& img {
    width: 100%;
    height: 100%;
}

@media screen and (min-width: 1440px) {
// 10n + 1
 ${props => {

        const diffRows = 6;
        const nElement = 1;
        const step = 10;
        const type = `${step}n + ${nElement}`;
        const initStart = 1;
        const initEnd = 3;

        for (let i = nElement; i < props.data; i += step) {
           
            if (props.index === i) {
                i === nElement ? props.gridRows[type][i] = { start: initStart, end: initEnd } : props.gridRows[type][i] = { start: props.gridRows[type][i - step].start + diffRows, end: props.gridRows[type][i - step].end + diffRows };

                return `
                &:nth-child(${type}) {
                height: 300px;
                grid-column: 1 / 2;
                grid-row: ${props.gridRows[type][i].start} / ${props.gridRows[type][i].end};
                }`;
            }
        }
    }}

// 10n + 5
${props => {

        const diffRows = 6;
        const nElement = 5;
        const step = 10;
        const type = `${step}n + ${nElement}`;
        const initStart = 2;
        const initEnd = 4;

        for (let i = nElement; i <= props.data; i += step) {
           
            if (props.index === i) {
                i === nElement ? props.gridRows[type][i] = { start: initStart, end: initEnd } : props.gridRows[type][i] = { start: props.gridRows[type][i - step].start + diffRows, end: props.gridRows[type][i - step].end + diffRows };


                return `
                &:nth-child(${type}) {
                height: 300px;
                grid-column: 2 / 4;
                grid-row: ${props.gridRows[type][i].start} / ${props.gridRows[type][i].end};
                }`;
            }
        }
    }}
    
// 10n + 8
     ${props => {
        const diffRows = 6;
        const nElement = 8;
        const step = 10;
        const type = `${step}n + ${nElement}`;
        const initStart = 4;
        const initEnd = 6;

        for (let i = nElement; i < props.data; i += step) {
           
            if (props.index === i) {
                i === nElement ? props.gridRows[type][i] = { start: initStart, end: initEnd } : props.gridRows[type][i] = { start: props.gridRows[type][i - step].start + diffRows, end: props.gridRows[type][i - step].end + diffRows };

                return `
                &:nth-child(${type}) {
                height: 300px;
                grid-column: 3 / 4;
                grid-row: ${props.gridRows[type][i].start} / ${props.gridRows[type][i].end};
                }`;
            }
        }
}}
    
// 10n + 9
     ${props => {

        const diffRows = 6;
        const nElement = 9;
        const step = 10;
        const type = `${step}n + ${nElement}`;
        const initStart = 5;
        const initEnd = 7;

        for (let i = nElement; i < props.data; i += step) {
           
            if (props.index === i) {
                i === nElement ? props.gridRows[type][i] = { start: initStart, end: initEnd } : props.gridRows[type][i] = { start: props.gridRows[type][i - step].start + diffRows, end: props.gridRows[type][i - step].end + diffRows };

                return `
                &:nth-child(${type}) {
                height: 300px;
                grid-column: 1 / 3;
                grid-row: ${props.gridRows[type][i].start} / ${props.gridRows[type][i].end};
                }`;
            }
        }
}}
}
    `;





 