import React from 'react';
import styles from './MapIframe.module.css';

const MapIframe = () => {
  return (
    <div className={styles.mapContainer}>
      <iframe
        id="mapa_iframe"
        src="https://bnw.mthapps.com.br:5000/"
        width="100%"
        height="100%"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default MapIframe;
