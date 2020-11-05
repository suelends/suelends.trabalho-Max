import React from 'react';
import NavBar from '../../components/NavBar/NavBar'
import { Link } from 'react-router-dom';
import './perfil.css'

const Perfil = () => {

  return (
    <>
      <NavBar />

      <div className='perfil'>
        <div className='container-perfil'>
          <button className='new-schedule'><Link to="./perfil/altperfil">Editar</Link></button>
          <h1>Meu Perfil</h1>
          <div className='data-perfil'>
            <div className="content-data">
              <h2>Dados pessoais</h2>
              <div className="data">
                <p>Nome: <label>João</label></p>
              </div>
            </div>
            <div className="content-data">
              <h2>Endereco</h2>
              <div className="data">
              <p>Endereço: <label>Casa da mãe joana</label></p>
              </div>
            </div>
            <div className="content-data">
              <h2>Contato</h2>
              <div className="data">
              <p>Telefone: <label>7070-7070</label></p>
              <p>E-mail: <label>asdas@jv.com</label></p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Perfil;