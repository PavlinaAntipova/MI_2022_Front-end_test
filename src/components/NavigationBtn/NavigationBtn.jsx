
import { Btn, ImgBox, TextBox } from "./NavigationBtn.styled";

export default function NavigationBtn({ path, text, img, bgColor }) {

    return <Btn to={path}>
        <ImgBox color={bgColor}>
            <img width={img.width} height={img.height} src={img.path} alt={text} />
        </ImgBox>
        <TextBox>{text}</TextBox>
    </Btn>
}