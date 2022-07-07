import { Item } from "./GridItem.styled";

export default function GridItem({children, index, amountData, gridRows}) {
    return <Item index={index + 1} data={amountData} gridRows={gridRows}>
            {children}
    </Item>
        
 }