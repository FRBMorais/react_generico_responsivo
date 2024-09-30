import React from 'react';
import styles from './Sidebar.module.css';

const Sidebar = ({ isOpen, className }) => {
  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.show : ''} ${className}`}>
      <nav className={styles.nav}>
        <div>
          <a className={styles.navLogo} href="#">
            <i className={`material-icons ${styles.navLogoIcon}`}>apps</i>
            <span className={styles.navLogoName}>AGRO</span>
          </a>
         
          <div className={styles.navList}>
            <a className={`${styles.navLink} ${styles.active}`} href="#">
              <i className="material-icons">dashboard</i>
              <span className={styles.navName}>Dashboard</span>
            </a>
            <a className={styles.navLink} href="#">
              <i className="material-icons">assignment</i>
              <span className={styles.navName}>Relatório</span>
            </a>
            <a className={styles.navLink} href="#">
              <i className="material-icons">assignment_ind</i>
              <span className={styles.navName}>Cadastros</span>
            </a>
            <a className={styles.navLink} href="#">
              <i className="material-icons">logout</i>
              <span className={styles.navName}>Logout</span>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
