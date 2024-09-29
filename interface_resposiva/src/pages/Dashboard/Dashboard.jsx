import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Panel from "../../components/Panel/Panel";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";

import styles from "./Dashboard.module.css";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Inverte o estado do sidebar
  };

  return (
    <div className={`${styles.containerDashboard} ${isSidebarOpen ? styles.sidebarOpen : styles.sidebarClosed}`}>
      <Header toggleSidebar={toggleSidebar} className={styles.containerHeader} />
      <Sidebar isOpen={isSidebarOpen} className={styles.containerSidebar} />
      <Panel className={styles.containerPanel} />
      <Footer className={styles.containerFooter} />
    </div>
  );
};

export default Dashboard;
