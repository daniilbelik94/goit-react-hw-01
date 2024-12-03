import styles from './FriendListItem.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
    return (
        <div className={styles.wrapper}>
            <img src={avatar} alt="Avatar" width="48" />
            <p className={styles.list_name} >{name}</p>
            {isOnline ?
                
                (<p className={styles.status_if_online}>Online</p>)
                :
                (<p className={styles.status_if_offline}>Offline</p>)
            }
        </div>


    );
}