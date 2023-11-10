import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";



function Cart(props) {
const [modalIsOpen, setModalIsOpen]= useState(false);

function deleteHandler(){
  setModalIsOpen(true);
   
}
function closeModel(){
setModalIsOpen(false);
console.log("clicked")
}
  return (
    <div className="cart">     
      <div className="cart-wrapper">
        <h2>{props.text}</h2>
        <div className="btn-class">
        <button className="btn-delete" onClick={deleteHandler}>Delete</button>
        {modalIsOpen && <Modal myOwnComponentParam={closeModel}/>}
        {modalIsOpen && <Backdrop ourComponent={closeModel}/>}
        </div>

       
      </div>
    </div>
  );
}
export default Cart;
