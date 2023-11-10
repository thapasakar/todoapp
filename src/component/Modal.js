function Modal(props) {
  function cancelHandler() {
    props.onCancel();
  }
  function confirmHandler() {
    props.onConfirm();
  }
  return (
    <div className="modal-container">
      <h1>Are you sure want to delete?</h1>
      <button className="btn confirm" onClick={confirmHandler}>
        Confirm
      </button>
      <button className="btn cancel" onClick={cancelHandler}>
        Cancel
      </button>
    </div>
  );
}
export default Modal;
