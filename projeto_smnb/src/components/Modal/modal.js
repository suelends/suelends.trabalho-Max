import React from 'react';
import FormSchedule from '../Form_Schedule';
import './modal.css';

const Modal = ({ onClose = () => { } }) => {

    return (
        <>
            <div className='modal'>
                <div className='container-modal'>
                    <button className='close-modal' onClick={onClose} />
                    <div className='content-modal'>
                        <div className="new-consulta">
                            <h2>Nova Consulta</h2>
                            <FormSchedule />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal;