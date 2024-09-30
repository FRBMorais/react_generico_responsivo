import React from 'react';
import styles from './StatsGrid.module.css';

const statsData = [
  { id: 'rel-tch', label: 'TCH', value: '0' },
  { id: 'rel-prod-hr', label: 'Prod./Hr (ton/h)', value: '0' },
  { id: 'rel-peso', label: 'Peso (ton)', value: '0' },
  { id: 'rel-area-colhida', label: 'Área Colhida (ha)', value: '0' },
  { id: 'rel-distancia', label: 'Distância Perc. (Km)', value: '0' },
  { id: 'rel-vel-media', label: 'Vel Média (Km/h)', value: '0' },
  { id: 'rel-vel', label: 'Vel. Máxima (Km/h)', value: '0' },
  { id: 'rel-pesagens', label: 'Qtd Pesagens', value: '0' },
];

const StatsGrid = () => {
  return (
    <div className={`text-center p-3 ${styles.statsGrid}`}>
      <div className={`row ${styles.rowCustom}`}>
        {statsData.map((stat) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={stat.id}>
            <div className={`card ${styles.statCard}`}>
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <h4 className={`${styles.statValue}`} id={stat.id}>
                  {stat.value}
                </h4>
                <p className={`${styles.statLabel}`}>{stat.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsGrid;
