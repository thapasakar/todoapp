function Modal(props){
    return(
        <div className="modal-container">
            <h1>Are you sure want to delete?</h1>
            <button className="btn confirm" onClick={props.myOwnComponentParam}>Confirm</button>
            <button className="btn cancel" onClick={props.myOwnComponentParam}>Cancel</button>
        </div>
    )


}
export default Modal;