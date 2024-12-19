import Modal from "./Modal";
import { useContext, useState } from "react";
import { CartContext } from "../Store/Cart-Context";
import {currencyFormattor} from "../Util/formatting";
import Button from "./Button";


function Cart({ open }) {
    const { items, addToCart, removeFromCart, cartTotal } = useContext(CartContext);
    const [close,setClose]=useState(false);
  const handleClose = () => { setClose(true);  };
  const cartTotalPrice = items.reduce((acc,val)=>acc+val.item.price*val.Qty,0);
  return (
    <Modal className="cart" open close={close}>
      <h2>Cart</h2>
      <ul>
        {items.map((cart) => (
          <li key={cart.item.id} className="cart-item">
            {cart.item.name} - {cart.Qty} X {cart.item.price}
            <p className="cart-item-actions">
            <button onClick={() => removeFromCart(cart.item)}>-</button>
            {cart.Qty}
            <button onClick={() => addToCart(cart.item)}>+</button>
            </p>
          </li>
        ))}
      </ul>
      <p className="cart-total">{currencyFormattor.format(cartTotalPrice)}</p>
      <span className="modal-action">
        <Button className="modal-action" onClick={handleClose}>Close</Button>
        <Button className="modal-action" >CheckOut</Button>
      </span>
    </Modal>
  );
}

export default Cart;
