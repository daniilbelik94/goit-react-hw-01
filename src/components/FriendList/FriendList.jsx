import styles from './FriendList.module.css'
import FriendListItem from '../FriendListItem/FriendlistItem.jsx';

export default function FriendList({ friends }) {
    return (
        <ul className={styles.list}>
            {friends.map(friend => (
                <li className={styles.list_item} key={friend.id}>
                    <FriendListItem
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}
                    />
                </li>
            ))}
        </ul>
    );
}