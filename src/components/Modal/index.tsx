import React from 'react';
import Modal from './index.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ModalComponent: React.FC<any> = (props) => {
  const { 
    children, 
    open, 
    handleOpenModal, 
    handleSaveForm,
    headerText
  } = props;

  return (
    open ?
      <Modal>
        <div className="modal">
          <div className="modal__header">
            {headerText}
            <button className="modal__close" onClick={handleOpenModal}><FontAwesomeIcon icon="times" /></button>
          </div>
          <div className="modal__content">
            {children}
          </div>
          <div className="modal__footer">
            <button className="modal__cancel" onClick={handleOpenModal}>Cancelar</button>
            <button className="modal__save" onClick={handleSaveForm}>Salvar</button>
          </div>
        </div>
      </Modal>
    : <div></div>
  );
}

export default ModalComponent;