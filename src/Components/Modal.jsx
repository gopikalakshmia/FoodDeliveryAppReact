import { useImperativeHandle, useRef, forwardRef, useContext } from "react";
import { createPortal } from "react-dom";
import { CartContext } from "../Store/Cart-Context";
import Button from "./Button";
import { currencyFormattor } from "../Util/formatting";

const Modal = forwardRef(function Modal(props, ref) {
  const dialog = useRef();
  const { items, addToCart, removeFromCart } = useContext(CartContext);
  console.log(items);
  let cartTotal=0;
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog ref={dialog} className={`modal`} {...props}>
      <ul>
        {items.map((cart) => (
          <li key={cart.item.id}>
            {" "}
            {cart.item.name}
            <button onClick={() => removeFromCart(cart.item)}>-</button>
            {" QTY: "}
            {cart.Qty}
            <button onClick={() => addToCart(cart.item)}>+</button>
          </li>
        ))}
      </ul>
      <p className="cart-total">{currencyFormattor.format(cartTotal)}</p>
  <div className="modal-action">
  <Button textOnly >Close</Button>
        <Button textOnly >CheckOut</Button>
  </div>
      
    
    </dialog>,
    document.getElementById("modal")
  );
});

export default Modal;
