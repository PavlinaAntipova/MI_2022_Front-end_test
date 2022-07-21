import { Circles } from "react-loader-spinner"
import { themeLight } from "helper/theme";

export default function Loader() {

    return <Circles height="80" width="80" color={themeLight.common.mainAccentColor} ariaLabel='loading'
        />
 }