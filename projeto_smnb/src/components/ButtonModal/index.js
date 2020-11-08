import React, { useState } from 'react';
import Modal from '../Modal/modal';
import './schedule.css'


const ButtonModal = () => {
const [ModalVisible, setModalVisible] = useState(false);
     return(
    <>
        <div>
        <button className='new-schedule' onClick={() => setModalVisible(true)}>Nova Consulta</button>
        {ModalVisible ? (
            <Modal onClose={() => setModalVisible(false)}>
            </Modal>
        ) : null}
        </div>
    </>
     )};
export default ButtonModal;