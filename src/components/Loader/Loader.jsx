import { theme } from "helper/theme";
import { Circles } from "react-loader-spinner";

export default function Loader() {
    return <Circles height="80" width="80" color={theme.mainAccentColor} ariaLabel='loading'
        />
 }