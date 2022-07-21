import { useMediaQuery } from 'react-responsive';

import { Btn, ImgBox, TextBox } from "./NavigationBtn.styled";

export default function NavigationBtn({ path, text, img, bgColor }) {
    const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1439px)' });
    
    return <Btn to={path}>
        {isTablet && <ImgBox color={bgColor}>
            <img width={img.width} height={img.height} src={img.path} alt={text} />
        </ImgBox> }
        <TextBox>{text}</TextBox>
    </Btn>
}