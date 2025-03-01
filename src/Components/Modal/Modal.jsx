import React, { useEffect } from 'react'
import { Button } from '../Button/Button';
import './Modal.css';

export const Modal = ({isOpen, onClose, title, children}) => {
    const handleOutsideClick = (e) => {
        if(e.target.classList.contains('modal-overlay')) onClose();
    }

    useEffect(() => {
        if(isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);
    
    return (
        isOpen && (
            <div data-testid="modal" className="modal-overlay" onClick={handleOutsideClick}>
                <div className="modal-content">
                <div className="modal-header">
                    {title && <h2>{title}</h2>}
                    <Button data-testid="modal-close-btn" className="modal-close-button" onClick={() => onClose()}>
                    &times;
                    </Button>
                </div>
                    <div className="modal-body">{children}</div>
                </div>
            </div>
        )
    );
}

Modal.defaultProps = {
    title: '',
};