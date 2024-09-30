import React from 'react';
import styles from './Controls.module.css';

const Controls = () => {
  const enviarDadosSeletores = () => {
    // Implementação da função enviarDadosSeletores
  };

  const enviaPeriodo = (id) => {
    // Implementação da função enviaPeriodo
  };

  return (
    <div className={`text-center text-white-50 border rounded p-3 ${styles.controls}`}>
      {/* Alteração aqui: removido 'g-0' e adicionado 'g-2' */}
      <div className="row g-2 row-cols-1 row-cols-md-4">
        {/* Composição */}
        <div className="col">
          <div className={`${styles.controlBox}`}>
            <p className={`${styles.controlTitle}`}>Composição</p>
            <div id="comp-drop"></div>
          </div>
        </div>
        {/* Data Inicial e Final */}
        <div className="col">
          <div className={`${styles.controlBox}`}>
            <div className="row">
              <div className="col">
                <input
                  className={`form-control-sm ${styles.dateInput}`}
                  data-bs-toggle="tooltip"
                  data-bss-tooltip=""
                  data-bs-placement="right"
                  id="rel-inicio"
                  type="date"
                  title="Início"
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <input
                  className={`form-control-sm ${styles.dateInput}`}
                  data-bs-toggle="tooltip"
                  data-bss-tooltip=""
                  data-bs-placement="right"
                  id="rel-fim"
                  type="date"
                  title="Fim"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Botão Pesquisar */}
        <div className="col">
          <div className={`${styles.controlBox} d-flex justify-content-center align-items-center`}>
            <button
              className={`btn btn-light fw-bold border rounded shadow d-flex justify-content-center align-items-center ${styles.searchButton}`}
              data-bs-toggle="tooltip"
              data-bss-tooltip=""
              id="envia-opt-rel"
              type="submit"
              onClick={enviarDadosSeletores}
              title="Enviar Dados Selecionados"
            >
              Pesquisar
            </button>
          </div>
        </div>
        {/* Botões de Período */}
        <div className="col">
          <div className={`${styles.controlBox} ${styles.periodButtonsContainer}`}>
            <button
              className={`btn btn-light fw-bold border rounded shadow ${styles.periodButton}`}
              data-bs-toggle="tooltip"
              data-bss-tooltip=""
              id="rel-safra"
              type="submit"
              onClick={() => enviaPeriodo('rel-safra')}
              title="Exibir Relatório Da Safra"
            >
              Safra
            </button>
            <button
              className={`btn btn-light fw-bold border rounded shadow ${styles.periodButton}`}
              data-bs-toggle="tooltip"
              data-bss-tooltip=""
              id="rel-mensal"
              type="submit"
              onClick={() => enviaPeriodo('rel-mensal')}
              title="Exibir Relatório Mensal"
            >
              Mensal
            </button>
            <button
              className={`btn btn-light fw-bold border rounded shadow ${styles.periodButton}`}
              data-bs-toggle="tooltip"
              data-bss-tooltip=""
              id="rel-semanal"
              type="submit"
              onClick={() => enviaPeriodo('rel-semanal')}
              title="Exibir Relatório Semanal"
            >
              Semanal
            </button>
            <button
              className={`btn btn-light fw-bold border rounded shadow ${styles.periodButton}`}
              data-bs-toggle="tooltip"
              data-bss-tooltip=""
              id="rel-diario"
              type="submit"
              onClick={() => enviaPeriodo('rel-diario')}
              title="Exibir Relatório Diário"
            >
              Diário
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Controls;
