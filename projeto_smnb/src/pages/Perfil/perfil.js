import React from 'react';
import NavBar from '../../components/NavBar/NavBar'
import './perfil.css'

const Perfil = () => {

  return (
    <>
      <NavBar />

      <div className='perfil'>
        <div className='container-perfil'>
          <button className='new-schedule'>Editar</button>
          <h1>Meu Perfil</h1>
          <div className='data-perfil'>
            <div className="content-data">
              <h2>Dados pessoais</h2>
              <div className="data">
              </div>
            </div>
            <div className="content-data">
              <h2>Endereco</h2>
              <div className="data">
              </div>
            </div>
            <div className="content-data">
              <h2>Contato</h2>
              <div className="data"></div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Perfil;