import React from "react";
import Header from "../../components/Header/Header";
import Panel from "../../components/Panel/Panel";
import Sidebar from "../../components/Sidebar/Sidebar";
import styles from "./Dashboard.module.css";


const Dashboard = () => {

    return(
        
        <div className={styles.containerDashboard}>
            <Header className={styles.containerHeader}/>
            <Sidebar className={styles.containerSidebar}/>
            <Panel className={styles.containerPanel}/>
        </div>

    );
}

export default Dashboard;