import moment from 'moment';
import 'moment/locale/uk';

import { ReactComponent as LikeIcon } from '../../images/icons/like.svg';
import { ReactComponent as FavoriteIcon } from '../../images/icons/fav.svg';
import { ReactComponent as DislikeIcon } from '../../images/icons/dislike.svg';
import { theme } from 'helper/theme';

export default function LogItem({item}) {
    const { image_id, value = undefined, created_at } = item;



    const getType = (value) => {
        if (value) {
            return 'added to Likes';
        } else if (value === 0) {
            return 'added to Dislikes';
        } else {
            return 'added to Favourites';
        }
  
    }

    return <li>
        <span>{moment(created_at).format('LT')}</span>
        <p>Image ID: <span>{image_id}</span> was {getType(value)}</p>
        {value ? <LikeIcon fill="#97EAB9" width="20" height="20"/> : value === 0 ? <DislikeIcon fill="#FFD280" width="20" height="20"/> : <FavoriteIcon fill={theme.mainAccentColor} width="20" height="20"/>}
    </li>

}
 