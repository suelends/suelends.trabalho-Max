import React from 'react';
import './modal.css';

const Modal = ({onClose = () => {}, children}) => {
    
    return(
        <>
        <div className='modal'>
            <div className='container-modal'>
                <button className='close-modal' onClick={onClose}/>
                <div className='content-modal'>
                    {children}
                </div>
            </div>
        </div>
        </>
    )
}

export default Modal;