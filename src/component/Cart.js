import Modal from "./Modal";

function Cart(props) {

function deleteHandler(){
   <Modal/>
   
}
  return (
    <div className="cart">     
      <div className="cart-wrapper">
        <h2>{props.text}</h2>
        <div className="btn-class">
        <button className="btn-delete" onClick={deleteHandler}>Delete</button>

        </div>
      </div>
    </div>
  );
}
export default Cart;
