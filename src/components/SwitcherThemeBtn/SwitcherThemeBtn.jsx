import { ReactComponent as LightIcon } from '../../images/icons/light-mode.svg';
import { ReactComponent as DarkIcon } from '../../images/icons/dark-mode.svg';

import { Btn, IconBox, SwitcherBox } from './SwitcherThemeBtn.styled';

export default function SwitcherThemeBtn({ isDarkTheme, setDarkTheme }) {

    const handleClick = () => {
    setDarkTheme(!isDarkTheme);
    localStorage.setItem('theme', JSON.stringify(isDarkTheme ? "dark" : "light"));
    }

    return <Btn type="button" onClick={handleClick}>
        <IconBox>
            {isDarkTheme ? <LightIcon/> : <DarkIcon/>}
        </IconBox>
        <SwitcherBox></SwitcherBox>
    </Btn>
}
 
