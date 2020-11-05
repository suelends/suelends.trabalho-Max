import React from 'react';
import InitialForm from '../../components/Form';
import UIContainer from '../../components/Container';
import './altperfil.css';

const Altperfil = () => {

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

export default Altperfil;