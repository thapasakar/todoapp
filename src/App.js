import logo from "./logo.svg";
import "./App.css";
import Cart from "./component/Cart";
import Modal from "./component/Modal";
import Backdrop from "./component/Backdrop";

function App() {
  return (
    <div className="container">
      <h1>My todos</h1>
      <Cart text='My first todo list'/>
      <Cart text='My second todo list'/>
      <Cart text='My third todo list'/>
      <Modal/>
      <Backdrop/>
    </div>
  );
}

export default App;
