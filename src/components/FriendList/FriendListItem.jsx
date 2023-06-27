import PropTypes from 'prop-types';
import { ListItem, ListSpan, ListImg, ListP } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, isOnline, name }) => {
  return (
    <ListItem>
      <ListSpan isOnline={isOnline} />
      <ListImg src={avatar} alt="User avatar" width="48" />
      <ListP>{name}</ListP>
    </ListItem>
  );
};
FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
