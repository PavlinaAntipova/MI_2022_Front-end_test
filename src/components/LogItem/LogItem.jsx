import moment from 'moment';
import 'moment/locale/uk';

import { ReactComponent as LikeIcon } from '../../images/icons/like.svg';
import { ReactComponent as FavoriteIcon } from '../../images/icons/fav.svg';
import { ReactComponent as DislikeIcon } from '../../images/icons/dislike.svg';

import { Id, Log, Text, Time } from './LogItem.styled';
import { theme } from 'helper/theme';

export default function LogItem({ item }) {
    const { image_id, value = undefined, created_at, isDeleted = undefined } = item;

    const getTypeOfFavourite = isDeleted => {
            
        if (isDeleted === true) {
            return 'removed from Favourites';
            }
            return 'added to Favourites';
    }

    if (value === 1) return <Log>
        <Text><Time>{moment(created_at).format('LT')}</Time>Image ID: <Id>{image_id}</Id> was added to Likes</Text>
        <LikeIcon fill="#97EAB9" width="20" height="20"/>
    </Log>
    
    if (value === 0) return <Log>
        <Text><Time>{moment(created_at).format('LT')}</Time>Image ID: <Id>{image_id}</Id> was added to Dislikes</Text>
        <DislikeIcon fill="#FFD280" width="20" height="20"/>
    </Log>
    
    if (value === undefined) return <Log>
        <Text><Time>{moment(created_at).format('LT')}</Time>Image ID: <Id>{image_id}</Id> was {getTypeOfFavourite(isDeleted)}</Text>
        {item?.isDeleted ? null : <FavoriteIcon fill={theme.mainAccentColor} width="20" height="20"/>}
    </Log>

    } 
    


 