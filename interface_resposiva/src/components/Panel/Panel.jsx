import React from 'react';
import UpdateInfo from './UpdateInfo/UpdateInfo';
import Controls from './Controls/Controls';
import StatsGrid from './StatsGrid/StatsGrid';
import Chart from './Chart/Chart';
import MapIframe from './MapIframe/MapIframe';
import Table from './Table/Table';
import Aviso from './Aviso/Aviso';
import styles from './Panel.module.css';

const Panel = (props) => {
  return (
    <div className={`${props.className} ${styles.panel}`}>
      <UpdateInfo />
      <div className={`container py-4 py-xl-5 ${styles.containerCustom}`}>
        <Controls />
        <StatsGrid />
        <Chart />
        <MapIframe />
        <Table />
        <Aviso />
      </div>
    </div>
  );
};

export default Panel;
