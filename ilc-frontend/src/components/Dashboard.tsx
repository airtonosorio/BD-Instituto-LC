import React, { useEffect, useState } from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';
import api from '../api';

ChartJS.register(
  ArcElement, 
  Tooltip, 
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

interface Beneficiario {
  tipoEscola: string;
  pessoasNaCasa: number;
}

const Dashboard: React.FC = () => {
  const [data, setData] = useState<Beneficiario[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/beneficiarios');
        setData(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };
    fetchData();
  }, []);

  // Dados para o gráfico de pizza
  const escolasData = {
    labels: ['Pública', 'Privada'],
    datasets: [{
      label: 'Tipo de Escola',
      data: [
        data.filter(b => b.tipoEscola === 'Pública').length,
        data.filter(b => b.tipoEscola === 'Privada').length,
      ],
      backgroundColor: ['#FF6384', '#36A2EB'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB']
    }]
  };

  // Dados para o gráfico de barras (média de pessoas por casa)
  const mediaPessoas = data.length > 0 
    ? data.reduce((sum, b) => sum + b.pessoasNaCasa, 0) / data.length 
    : 0;

  const pessoasData = {
    labels: ['Média de Pessoas por Casa'],
    datasets: [{
      label: 'Pessoas',
      data: [mediaPessoas],
      backgroundColor: '#4BC0C0'
    }]
  };

  return (
    <div className="container mt-5">
      <h2>Dashboard ILC</h2>
      <div className="row">
        <div className="col-md-6">
          <h4>Distribuição por Escola</h4>
          <Pie data={escolasData} />
        </div>
        <div className="col-md-6">
          <h4>Média de Pessoas por Casa</h4>
          <Bar data={pessoasData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;