import { Circles } from "react-loader-spinner";
import { useMediaQuery } from 'react-responsive';
import { themeLight } from "helper/theme";

export default function Loader() {

    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    const isTablet = useMediaQuery({ query: '(min-width: 768px)' });

    return <>
        {isMobile && <Circles height="40" width="40" color={themeLight.common.mainAccentColor} ariaLabel='loading'
        />}
        {isTablet && <Circles height="80" width="80" color={themeLight.common.mainAccentColor} ariaLabel='loading'
        />}
    
    </>
 }