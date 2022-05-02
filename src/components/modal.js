
function Modal(props) {
    return (
      <div className='modal'>
        <p>{props.text}</p>
        <button className='btn btn-red' onClick={props.onClose}>
          Cancel
        </button>
        <button className='btn btn-green' onClick={props.onClose}>
          Confirm
        </button>
      </div>
    );
  }
  
  export default Modal;