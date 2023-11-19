import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import Home from './pages/home/home';
import Sobre from './pages/sobre/sobre';
import Produtos from './pages/produtos/produtos';
import Politica from './pages/politica/politica';
import Faq from './pages/faq/faq';
import FaleConosco from './pages/faleconosco/faleconosco';
import Cadastro from './pages/cadastro/cadastro';
import Login from './pages/login/login';

//Rotas Protegidas necessarias login:
import Dashboard from './pages/dashboard/dashboard';
import Agenda from './pages/agenda/agenda';
import Configuracoes from './pages/configuracoes/configuracoes';
import Cursos from './pages/cursos/cursos';

function App() {
  return (
    <div className="App">

      <Router>

        <Routes>
          <Route path="/" element={<Home />} ></Route>
          <Route path="/sobre" element={<Sobre />} ></Route>
          <Route path="/produtos" element={<Produtos />} ></Route>
          <Route path="/politica" element={<Politica />} ></Route>
          <Route path="/faq" element={<Faq />} ></Route>
          <Route path="/faleconosco" element={<FaleConosco />} ></Route>
          <Route path="/cadastro" element={<Cadastro />} ></Route>
          <Route path="/login" element={<Login />} ></Route>


          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/agenda' element={<Agenda />}></Route>
          <Route path='/configuracoes' element={<Configuracoes />}></Route>
          <Route path='/cursos' element={<Cursos />}></Route>
        </Routes>
      </Router>


    </div>

  );
}

export default App;
