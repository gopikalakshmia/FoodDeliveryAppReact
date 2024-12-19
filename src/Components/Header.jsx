import logo from "../assets/logo.jpg";
import Button from "./Button";
import {CartContext} from "../Store/Cart-Context";
import {useContext, useRef, useState} from 'react';
import Modal from "./Modal";
import Cart from "./Cart";

function Header() {
const {cartLength}=useContext(CartContext);
const modal=useRef();
const handleOpen=()=>{
  setOpen(true);
}
const [open,setOpen]=useState(false);
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="logo" />
        <h1>REACTFOOD</h1>
      </div>
      <Button textOnly onClick={handleOpen}>Cart ({cartLength})</Button>
      {open&& <Cart open/>}
    </header>
  );
}

export default Header;
