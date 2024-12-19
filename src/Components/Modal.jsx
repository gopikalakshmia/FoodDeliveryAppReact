import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

function Modal({open,close,className,children}) {
  const modal=useRef();
useEffect(()=>{
  if(open){
    modal.current.showModal();
  }
  if(close){
    modal.current.close();
  }
},[open,close]);

  return createPortal( <dialog ref={modal} className={`modal ${className}`}>{children}</dialog> ,document.getElementById("modal"));
}

export default Modal;