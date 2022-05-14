
import { useState } from "react";
const AddCart = (product) => {
    const  [cartItems, setCartItems] = useState([])

    // const cartItemss = cartItems.data

    let alreadyInCart = false;
    cartItems.forEach((item) =>{
        if(item._id === product._id){
            item.count++;
            alreadyInCart = true;
        }
    });
    if(!alreadyInCart){
        cartItems.push({...product, count:1})
    }
    setCartItems(cartItems)
    return ( 
        <div>
             
        </div>
     );
}
 
export default AddCart;