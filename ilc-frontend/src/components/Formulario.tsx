import React, { useState } from 'react';
import api from '../api';

const Formulario: React.FC = () => {
  const [form, setForm] = useState({
    nome: '',
    dataNascimento: '',
    telefone: '',
    pessoasNaCasa: 1,
    tipoEscola: 'Pública'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Convertendo dados para o formato esperado pelo backend
      const dadosParaEnviar = {
        ...form,
        pessoasNaCasa: Number(form.pessoasNaCasa) // Garante que é número
      };
      
      await api.post('/beneficiarios', dadosParaEnviar);
      alert('Cadastrado com sucesso!');
      // Limpa o formulário
      setForm({
        nome: '',
        dataNascimento: '',
        telefone: '',
        pessoasNaCasa: 1,
        tipoEscola: 'Pública'
      });
    } catch (error) {
      console.error('Erro detalhado:', error);
      alert('Erro ao cadastrar! Verifique o console para detalhes.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-5">
      <div className="mb-3">
        <label className="form-label">Nome Completo</label>
        <input
          type="text"
          className="form-control"
          value={form.nome}
          onChange={(e) => setForm({...form, nome: e.target.value})}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Data de Nascimento</label>
        <input
          type="date"
          className="form-control"
          value={form.dataNascimento}
          onChange={(e) => setForm({...form, dataNascimento: e.target.value})}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Telefone</label>
        <input
          type="tel"
          className="form-control"
          value={form.telefone}
          onChange={(e) => setForm({...form, telefone: e.target.value})}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Pessoas na Casa</label>
        <input
          type="number"
          className="form-control"
          min="1"
          value={form.pessoasNaCasa}
          onChange={(e) => setForm({...form, pessoasNaCasa: parseInt(e.target.value) || 1})}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Tipo de Escola</label>
        <select
          className="form-select"
          value={form.tipoEscola}
          onChange={(e) => setForm({...form, tipoEscola: e.target.value})}
          required
        >
          <option value="Pública">Pública</option>
          <option value="Privada">Privada</option>
        </select>
      </div>

      <button type="submit" className="btn btn-primary">Cadastrar</button>
    </form>
  );
};

export default Formulario;