import React, { useState } from 'react';
import Formulario from './components/Formulario';
import Dashboard from './components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App: React.FC = () => {
  const [showDashboard, setShowDashboard] = useState(false);

  return (
    <div className="app-container">
      <header className="app-header">
        <img
        src={require('./assets/logo.png')}
        alt="Logo do Instituto Lucimário Caitano"
        className="header-logo img-fluid me-3"
        />
        <h1 className="app-title">Instituto Lucimário Caitano - Cadastro de Beneficiários</h1>
      </header>

      <main className="app-main">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 mb-4">
            <div className="app-card">
              <div className="app-card-header bg-info">
                <h2 className="app-card-title">Cadastro de Beneficiários</h2>
              </div>
              <div className="app-card-body">
                <Formulario />
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-8">
            <div className="app-card">
              <div 
                className="app-card-header bg-success d-flex justify-content-between align-items-center"
                style={{ cursor: 'pointer' }}
                onClick={() => setShowDashboard(!showDashboard)}
              >
                <h2 className="app-card-title m-0">Análise de Dados</h2>
                <span>
                  {showDashboard ? '▲' : '▼'}
                </span>
              </div>
              
              {showDashboard && (
                <div className="app-card-body">
                  <Dashboard />
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <footer className="app-footer">
        <small>© {new Date().getFullYear()} Instituto ILC</small>
      </footer>
    </div>
  );
};

export default App;