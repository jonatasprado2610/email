import React from 'react';
import './modal.scss';

function Modal({ show, onClose }) {
  if (!show) return null;

  return (
    <div className="modal-background">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>&times;</button>
        <p>Emai enviado com sucesso.</p>
      </div>
    </div>
  );
}

export default Modal;
