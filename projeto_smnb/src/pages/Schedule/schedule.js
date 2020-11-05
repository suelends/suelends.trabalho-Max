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
              <div className="new-consulta">
                <h2>Nova Consulta</h2>
                <form className='form-modal' /*onSubmit={onSubmit}*/>
                  <div className='forms'>
                    <label htmlFor="especialidade">Especialidade</label>
                    <input id="especialidade" name="especialidade" type="text" /*onChange={onChange}*/ />
                  </div>
                  <div className='forms'>
                    <label htmlFor="profissional">Profissional</label>
                    <input id="profissional" name="profissional" type="text" /*onChange={onChange}*/ />
                  </div>
                  <div className='forms'>
                    <label htmlFor="data">Data</label>
                    <input id="data" name="data" type="data" /*onChange={onChange}*/ />
                  </div>
                  <div className='forms'>
                    <label htmlFor="hora">Horário</label>
                    <input id="hora" name="hora" type="hour" /*onChange={onChange}*/ />
                  </div>
                  <div>
                    <button className="btn-cancelar" type="submit">Agendar</button>
                  </div>
                </form>
              </div>
            </Modal>
          ) : null}
          <div className='all-schedule'>
            <h1>Consultas</h1>
            <div className='history-schedule'>
              <div className='marked-schedule'>
                <h4>Especialidade</h4>
                <p>Consulta com:<label> </label></p>
                <p>Horário: <label></label></p>
                <button className='btn-cancelar'>Cancelar</button>
              </div>
              <div className='marked-schedule'>
                <h4>Especialidade</h4>
                <p>Consulta com:<label> </label></p>
                <p>Horário: <label></label></p>
                <button className='btn-cancelar'>Cancelar</button>
              </div>
            </div>

          </div>
        </div>
      </div>

    </>
  );
}

export default Schedule;