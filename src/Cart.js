import React from 'react'


function Cart({cartItems, removeFromCart}) {
    
    console.log(cartItems.length)
    console.log(cartItems)
    return (
      <div className='cart'>
          {cartItems.length === 0 ? (
              <div className='cart cart-header'>Cart is empty</div>
          ) : (
              <div className='cart cart-header'>
                  You have {cartItems.length} in the cart {" "}
              </div>
          )
          }

          <div>
            <div>
                <ul className='cart-items'>
                    {cartItems.map((item) =>(
                        <li key={item.id}>
                            <div>
                                <img src={item.image} alt={item.title}></img>
                            </div>
                            <div>
                                <div>{item.image}</div>
                                <div className='right'>
                                    {item.price} x {item.count} {" "}
                                    <button className='button' onClick={() =>removeFromCart(item)}>
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>            
          </div> 
      </div>
    )
}

export default Cart
