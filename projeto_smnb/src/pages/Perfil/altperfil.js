import React, { Component } from 'react';
import InitialForm from '../../components/Form';
import UIContainer from '../../components/Container';
// import ApiPacients from '../../utils/ApiPacients';
import './altperfil.css';

class Altperfil extends Component {


  render() {
    return (
      <>
        <div className="newpacient">
          <div className='pacient'>
            <UIContainer>
              <h1>Meu Perfil</h1>
              <h2>Editar Cadastro</h2>
              <InitialForm />
            </UIContainer>
          </div>
        </div>
      </>
    );
  }
}

export default Altperfil;