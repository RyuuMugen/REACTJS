import React from 'react';
import styles from './styles.module.css';

const Layout = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <h2>Left</h2>
        <p>Content Left</p>
      </div>
      <div className={styles.content}>
        <h2>Right</h2>
        <p>Content Right</p>
      </div>
    </div>
  );
};

export default Layout;
