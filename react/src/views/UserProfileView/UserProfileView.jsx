import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import styles from './UserProfileView.module.css';

export default function UserProfileView() {
  const user = useContext(UserContext);

  return (
    <div className={styles.profile}>
      <h1>User Profile</h1>
      <br />

      <div className={styles.futureFeature}>
      <p>*Hello, {user.username}!
      This feature will be coming soon*</p>
      </div>
    </div>
  );
}