import React from 'react';

import styles from './ProfileCard.module.css';

const ProfileCard = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '50vw',
      }}
    >
      <div className={styles.profileCardContainer}>
        <div className={styles.profileCard}>
          <div className={styles.profileCardImageContainer}>
            <img
              className={styles.profileCardImage}
              src='https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
              alt='profile'
            />
          </div>
          <div className={styles.profileCardInfoContainer}>
            <div className={styles.profileCardInfo}>
              <h1 className={styles.profileCardName}>John Doe</h1>
              <h2 className={styles.profileCardTitle}>Web Developer</h2>
              <p className={styles.profileCardDescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
