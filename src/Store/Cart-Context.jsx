import { createContext, useState } from "react";

export const  CartContext=createContext({
    items:[],
    addToCart:()=>{},
    cartLength:0
})

export  function CartContextProvider({children}){
const [cart,setCart]=useState([]);
const [length,setLength]=useState(0);
const addItemToCart=(newItem)=>
    {
        setCart((prevItem)=>([...prevItem,newItem]));
        setLength((prevLength)=>(prevLength+1));
    }
    console.log(cart);
    const ValContext={
        items:cart,
        addToCart:addItemToCart,
        cartLength:length
    }
return(
    <CartContext.Provider value={ValContext}>
        {children}
    </CartContext.Provider> 
)

}