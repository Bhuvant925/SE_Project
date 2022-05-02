import { useState } from 'react';

import Backdrop from './backdrop';
import Modal from './modal';

function Current(props){
    const [showModal, setShowModal] = useState();

    function showModalHandler() {
      setShowModal(true);
    }

    function closeModalHandler() {
      setShowModal(false);
    }
    return (
    <div className='card'>
        <h2>{props.text}</h2>
        <div className='actions '>
            <button className='btn btn-green' onClick={showModalHandler}>Resume</button>
            <button className='btn btn-red' onClick={showModalHandler}>Unenroll</button>
        </div>
        {showModal && <Backdrop onClick={closeModalHandler} />}
        {showModal && <Modal text='Are you sure?' onClose={closeModalHandler} />}
    </div>
);
}

export default Current;