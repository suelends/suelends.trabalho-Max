import React from 'react';
import InitialForm from '../../components/Form';
import UIContainer from '../../components/Container';
import './newPacient.css';

const NewPacient = () => {

  return (
    <>
      <div className="newpacient">
        <div className='pacient'>
          <UIContainer>
            <h1>Cadastre-se</h1>
            <h2>Novo Cadastro</h2>
            <InitialForm />
          </UIContainer>
        </div>
      </div>
    </>
  );
}

export default NewPacient;