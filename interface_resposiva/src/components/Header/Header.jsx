import React from "react";
import styles from "./Header.module.css";

const Header = ({ toggleSidebar, className }) => {
  return (
    <header className={`${styles.header} ${className}`}>
      <div className={styles.headerLeft}>
        <button className={styles.toggleButton} onClick={toggleSidebar}>
          <i className={`${styles.menuHamburguer} material-icons`}>menu</i>
        </button>
        
        <div>
     
            <img
            className={styles.logoAgro}
            src="agro.png"
            alt="Logo da Empresa"
            />
            <h2 className={styles.relatorioInstantaneo}>Relatório Instantâneo</h2>

        </div>

      </div>
      <img
        className={styles.logo}
        src="apple-icon-180x180.png"
        alt="Logo da Empresa"
      />
    </header>
  );
};

export default Header;
