import styled from "styled-components";

export const Item = styled.li`
background: #C4C4C4;
border-radius: ${props => props.theme.borderRadiusMax};
height: 140px;
overflow: hidden;

& img {
    width: 100%;
    height: 100%;
}

// 10n + 1
 ${props => {
        const elems = props.data;
        const columns = 3;
        const rows = Math.ceil(elems / columns);
        const gridRow = rows + 1;
        const rowsInBlock = 3;
        const rowsInBlockGrid = rowsInBlock + 1;
        const diffRows = gridRow / rowsInBlockGrid;
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
        const elems = props.data;
        const columns = 3;
        const rows = Math.ceil(elems / columns);
        const gridRow = rows + 1;
        const rowsInBlock = 3;
        const rowsInBlockGrid = rowsInBlock + 1;
        const diffRows = gridRow / rowsInBlockGrid;
        const nElement = 5;
        const step = 10;
        const type = `${step}n + ${nElement}`;
        const initStart = 2;
        const initEnd = 4;

        for (let i = nElement; i < props.data; i += step) {
           
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
        const elems = props.data;
        const columns = 3;
        const rows = Math.ceil(elems / columns);
        const gridRow = rows + 1;
        const rowsInBlock = 3;
        const rowsInBlockGrid = rowsInBlock + 1;
        const diffRows = gridRow / rowsInBlockGrid;
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
        const elems = props.data;
        const columns = 3;
        const rows = Math.ceil(elems / columns);
        const gridRow = rows + 1;
        const rowsInBlock = 3;
        const rowsInBlockGrid = rowsInBlock + 1;
        const diffRows = gridRow / rowsInBlockGrid;
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
    `;




 