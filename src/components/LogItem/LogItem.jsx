import moment from 'moment';
import 'moment/locale/uk';

import { ReactComponent as LikeIcon } from '../../images/icons/like.svg';
import { ReactComponent as FavoriteIcon } from '../../images/icons/fav.svg';
import { ReactComponent as DislikeIcon } from '../../images/icons/dislike.svg';
import { theme } from 'helper/theme';
import { Id, Log, Text, Time } from './LogItem.styled';

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

    return <Log>
        <Text><Time>{moment(created_at).format('LT')}</Time>Image ID: <Id>{image_id}</Id> was {getType(value)}</Text>
        {value ? <LikeIcon fill="#97EAB9" width="20" height="20"/> : value === 0 ? <DislikeIcon fill="#FFD280" width="20" height="20"/> : <FavoriteIcon fill={theme.mainAccentColor} width="20" height="20"/>}
    </Log>

}
 