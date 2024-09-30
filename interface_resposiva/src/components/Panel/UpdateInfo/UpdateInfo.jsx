import React from 'react';
import styles from './UpdateInfo.module.css';

const UpdateInfo = () => {
  return (
    <div id="rel-atualizacao" className={styles.updateInfo}>
      Última atualização de dados recebida: <span id="dataAtualizacao"></span>
    </div>
  );
};

export default UpdateInfo;
