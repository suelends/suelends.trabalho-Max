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
          <InitialForm />
        </UIContainer>
        </div>
      </div>
    </>
  );
}

export default NewPacient;