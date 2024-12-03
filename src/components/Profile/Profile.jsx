import styles from "./Profile.module.css";

export default function Profile({ username, tag, location, avatar, stats })
{
    return (    
        <div className={styles.container}>
  <div className={styles.container-wrapper}>
    <img className={styles.avatar}
      src={avatar}
      alt="User avatar"
    />
    <p className={styles.profile_name}>{username}</p>
    <p className={styles.profile-tag}>@{tag}</p>
    <p className={styles.profile-location}>{location}</p>
  </div>

  <ul className={styles.profile-list}>
    <li className={styles.profile-list_item}>
      <span className={styles.profile-item_title}>Followers</span>
      <span className={styles.profile-stats}>{stats.followers}</span>
    </li>
    <li>
      <span className={styles.profile-item_title}>Views</span>
      <span className={styles.profile-stats}>{stats.views}</span>
    </li>
    <li>
      <span className={styles.profile-item_title}>Likes</span>
      <span className={styles.profile-stats}>{stats.likes}</span>
    </li>
  </ul>
</div>
    )
}