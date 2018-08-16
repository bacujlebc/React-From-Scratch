import React, { Component } from 'react';
import ReactDOM, { createPortal } from 'react-dom';

class Modal extends Component {
    componentWillMount() {
        this.modalContainer = document.createElement('div');
        this.modalContainer.setAttribute('id', 'modal-container');
        document.body.appendChild(this.modalContainer);
    }

    componentWillUnmount() {
        this.modalContainer.parentNode.removeChild(this.modalContainer);
    }

    render() {
        return createPortal(<div>Modal</div>, this.modalContainer);
    }
}

export default Modal;
