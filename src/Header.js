
import React, { useState } from 'react'
import Modal from 'react-modal'
import Zoom from 'react-reveal/Zoom'
import formatCurrency from './util'



function Header({products, addToCart}) {
    

    var first = products.slice(0,1).map((product) => {
        return product 
    })
    const [product, setProduct] = useState(null)
  
    const openModal = (product) =>{
        setProduct(product)
    }  
    const closeModal = () =>{
        setProduct(null);
    }  
    
  return (
      <div className='header-container'>
    <div className='header'>
        <div className='nav'>
            <div >
                Moskol Engineering
            </div>

            <div className="header-list">
                <div>
                    <p><a href='/'>Home</a></p>
                    <p><a href='/'>CCTV</a></p>
                    <p><a href='/'>Inverters</a></p>
                    <p><a href='/'>Decoders</a></p>
                </div>
            </div>

            <div>
                <i className="fas fa-shopping-cart"></i>
            </div>
        </div>

        {/* {products.map((product) =>(
            <div>
                <h6>NEW PRODUCT</h6>
                {product.title[0]}
                {product._id[0]}
            </div>
        ))}       */}

        <div className='first-product-div'>
            {first.map((product) =>(
                <div key={product._id} className='first-product'>
                    <div className='first-product-text'>
                        <h4 className='new-product'>NEW PRODUCT</h4>
                        <h1 className='first-product-title'>{product.title}</h1>
                        <p className='description'>{product.description}</p>
                        {/* <button className='first-buy-button' onClick={() => addToCart(product)}> Buy Now</button> */}
                        <button className='first-buy-button' onClick={() => openModal(product)}> See Product</button>
                        
                    </div>

                    <div className='first-product-image'>
                        <img src={product.image} alt="latest product"/>
                    </div>
                    
                    
                </div>
            ))}
        </div>
        
        
        

    </div>

    {product && (
        <Modal isOpen={true} onRequestClose={closeModal}>
            <Zoom>
                <button className='close-modal' onClick={closeModal}>
                    X
                </button>
                <div className='product-details'>
                    <img src={product.image} alt={product.title}></img>
                    <div>
                        <p>
                            <strong>{product.title}</strong>
                        </p>
                        <p>{product.description}</p>
                        <p>
                            Available Sizes: {" "}
                            {product.availableSizes.map((x) =>(
                                <span>
                                    {" "}
                                    <button className='button'>{x}</button>
                                </span>
                            ))}
                        </p>
                        <div className='product-price'>
                            <div>{formatCurrency(product.price)}</div>
                            <button className='button primary'
                                onClick={() => {
                                    addToCart(product);
                                    closeModal();
                                }}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </Zoom>
        </Modal>
    )}
    </div>


  )
}
export default Header