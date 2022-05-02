import { useState } from 'react';

import Backdrop from './backdrop';
import Modal from './modal';



function Finished(props){
    const [showModal, setShowModal] = useState();

    function showModalHandler() {
      setShowModal(true);
    }

    function closeModalHandler() {
      setShowModal(false);
    }
    return (
        <div className='card'>
            <div className='action-finished'>
                <h2 className='h2-finished'>{props.text}</h2>
                <button className='btn btn-yellow'>Finished</button>
            </div>
        <div className='actions-finished '>
            <button className='btn btn-green' onClick={showModalHandler}>Download Certificate</button>
        </div>
        {showModal && <Backdrop onClick={closeModalHandler} />}
        {showModal && <Modal text='Are you sure?' onClose={closeModalHandler} />}
    </div>);
}

export default Finished;