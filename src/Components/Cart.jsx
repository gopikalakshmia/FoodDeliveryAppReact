import Modal from "./Modal";
import { useContext, useState } from "react";
import { CartContext } from "../Store/Cart-Context";
import {currencyFormattor} from "../Util/formatting";
import Button from "./Button";
import CartItem from "./CartItems";
import CheckOut from "./CheckOut";


function Cart({ open,handleReopen }) {

    const [close,setClose]=useState(false);
    const [checkout,setCheckout]=useState(false);
  const handleClose = () => { setClose(true); handleReopen(); };
  const handleCheckout = () => { setCheckout(true);  };

  return (
    <Modal className="cart" open close={close}>
     {!checkout &&<CartItem handleCheckout={handleCheckout} handleClose={handleClose}/>} 
     {checkout &&<CheckOut handleClose={handleClose}/>} 
    </Modal>
  );
}

export default Cart;
