import { useImperativeHandle, useRef,forwardRef, useContext } from "react";
import { createPortal } from "react-dom";
import {CartContext} from "../Store/Cart-Context";

const Modal=forwardRef(function Modal (props,ref){
const dialog=useRef();
const {items}=useContext(CartContext);
console.log(items);
    useImperativeHandle(ref,()=>{
       return {open(){
            dialog.current.showModal();
        }}
    })
  return createPortal(
    <dialog ref={dialog} {...props}>
      <ul>
        {items.map((cart)=>(<li key={cart.id}>{cart.name}</li>))}
      </ul>
    </dialog>,
    document.getElementById("modal")
  );
})

export default Modal;
