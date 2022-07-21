import moment from 'moment';
import 'moment/locale/uk';

import { ReactComponent as LikeIcon } from '../../images/icons/like.svg';
import { ReactComponent as FavoriteIcon } from '../../images/icons/fav.svg';
import { ReactComponent as DislikeIcon } from '../../images/icons/dislike.svg';

import { Id, Log, Text, Time } from './LogItem.styled';
import { themeLight } from 'helper/theme';

export default function LogItem({ item }) {
    const { image_id, value = undefined, created_at, isDeleted = undefined, deleted_at } = item;

    const getTypeOfFavourite = isDeleted => {
            
        if (isDeleted === true) {
            return 'removed from Favourites';
            }
            return 'added to Favourites';
    }

    if (value === 1) return <Log>
        <Time>{moment(created_at).format('LT')}</Time><Text>Image ID: <Id>{image_id}</Id> was added to Likes</Text>
        <LikeIcon fill="#97EAB9" width="20" height="20"/>
    </Log>
    
    if (value === 0) return <Log>
        <Time>{moment(created_at).format('LT')}</Time><Text>Image ID: <Id>{image_id}</Id> was added to Dislikes</Text>
        <DislikeIcon fill="#FFD280" width="20" height="20"/>
    </Log>
    
    if (value === undefined) return <Log>
        <Time>{isDeleted ? moment(deleted_at).format('LT') : moment(created_at).format('LT')}</Time><Text>Image ID: <Id>{image_id}</Id> was {getTypeOfFavourite(isDeleted)}</Text>
        {item?.isDeleted ? null : <FavoriteIcon fill={themeLight.common.mainAccentColor} width="20" height="20"/>}
    </Log>

    } 
    


 