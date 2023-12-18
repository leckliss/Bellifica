import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import Home from './pages/home/home';
import Sobre from './pages/sobre/sobre';
import Produtos from './pages/produtos/produtos';
import Politica from './pages/politica/politica';
import Faq from './pages/faq/faq';
import FaleConosco from './pages/faleconosco/faleconosco';
import Cadastro from './pages/cadastro/cadastro';
import Login from './pages/login/login';
import Curso from './pages/curso/curso';

//Rotas Protegidas necessarias login:
import Dashboard from './pages/dashboard/dashboard';
import Painel from './components/painel/painel';
import Agenda from './components/agenda/agenda';
import Cursos from './components/cursos/cursos';
import Configuracoes from './components/configuracoes/configuracoes';
//Configurações:
import Assinatura from './components/configuracoes/assinatura/assinatura';
import Contato from './components/configuracoes/contato/contato';
import MeusDados from './components/configuracoes/meusdados/meusdados';
import Politicas from './components/configuracoes/politicas/politicas';

import ProtectedRoute from './ProtectedRoute';


function App() {
  return (
    <div className="App">

      <Router>

        <Routes>
          <Route path="/" exact element={<Home />} ></Route>
          <Route path="/sobre" element={<Sobre />} ></Route>
          <Route path="/produtos" element={<Produtos />} ></Route>
          <Route path="/politica" element={<Politica />} ></Route>
          <Route path="/faq" element={<Faq />} ></Route>
          <Route path="/faleconosco" element={<FaleConosco />} ></Route>
          <Route path="/cadastro" element={<Cadastro />} ></Route>
          <Route path="/login" element={<Login />} ></Route>
          <Route path="/curso" element={<Curso />} ></Route>


          <ProtectedRoute path='/dashboard' component={Dashboard} />

        </Routes>
      </Router>

      <ToastContainer />
    </div>

  );
}

export default App;
