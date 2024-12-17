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
        console.log(cart);
        let findIndexCart=cart.findIndex(val=>val.item.id===newItem.id)
        console.log(findIndexCart);
        if(findIndexCart ===-1)
        setCart((prevItem)=>([...prevItem,{item:newItem,Qty:1}]));
    else{
        let existigItem=cart[findIndexCart];
        let cartItemtToUpdate={...existigItem,Qty:existigItem.Qty+1};
        cart[findIndexCart]=cartItemtToUpdate;


    }
        setLength((prevLength)=>(prevLength+1));
    }
    //console.log(cart);
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