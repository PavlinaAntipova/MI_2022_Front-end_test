import { BasicBtn } from "./Btn.styled";

export default function Btn({children, type, style}) {
    return <BasicBtn style={style} type={type}>{children}</BasicBtn>
}