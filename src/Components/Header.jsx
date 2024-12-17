import logo from "../assets/logo.jpg";
import Button from "./Button";
import {CartContext} from "../Store/Cart-Context";
import {useContext, useRef, useState} from 'react';
import Modal from "./Modal";

function Header() {
const {cartLength}=useContext(CartContext);
const modal=useRef();
const handleOpen=()=>{
  modal.current.open();
}
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="logo" />
        <h1>REACTFOOD</h1>
      </div>
      <Button textOnly onClick={handleOpen}>Cart ({cartLength})</Button>
      <Modal ref={modal} />
    </header>
  );
}

export default Header;
