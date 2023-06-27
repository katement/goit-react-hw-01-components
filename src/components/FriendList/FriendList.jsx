import { FriendListItem } from 'components/FriendList/FriendListItem';
import { List } from './FriendList.styled';

export const FriendList = ({ friends }) => (
  <List>
    {friends.map(({ id, avatar, name, isOnline }) => {
      return (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      );
    })}
  </List>
);
