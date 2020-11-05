import React, { useState } from 'react';
import Modal from '../../components/Modal/modal';
import NavBar from '../../components/NavBar/NavBar';
import './schedule.css';

function Schedule() {
  const [ModalVisible, setModalVisible] = useState(false);

  return (
    <>
      <NavBar />

      <div className='schedule'>
        <div className='container-schedule'>
          <button className='new-schedule' onClick={() => setModalVisible(true)}>Nova Consulta</button>
          {ModalVisible ? (
            <Modal onClose={() => setModalVisible(false)}>
              <h2>XD </h2>
            </Modal>
          ) : null}
            <div className='all-schedule'>
            <h1>Consultas</h1>
              <div className='marked-schedule'>
              </div>
              
            </div>
        </div>
      </div>

    </>
  );
}

export default Schedule;