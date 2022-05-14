import React, { useState } from 'react'
import Modal from 'react-modal'
import Zoom from 'react-reveal/Zoom'
import formatCurrency from './util'


function Products({products, addToCart}) {
  var firstThreeProduct = products.slice(0,3).map((product) => {
    return product 
  })
  const [product, setProduct] = useState(null)
  
  const openModal = (product) =>{
    setProduct(product)
  }  
  const closeModal = () =>{
    setProduct( null);
  }  
  
  return (
    <div className="product">
      <ul className='product-list'>
          {firstThreeProduct.map((product) =>(
            <li key={product._id}>
              <div className='single-product'>
                <a href='/'>
                  <img src={product.image} alt="product list"/>
                  <div className="title-and-shop">
                    <h3>{product.title}</h3>
                    <h6 onClick={() => addToCart(product)}>shop</h6>
                  </div>
                  
                </a>
                
              </div>
            </li>
              
          ))}  

      </ul>
      <ul className='second-section'>
        {firstThreeProduct.map((product) => (
          <li key={product._id}>
            <div className='card'>
              <img src={product.image}  alt="product"/>
              <div>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <button className='second-section-button' onClick={() => openModal(product)}>
                  See Product
                </button>
              </div>
            </div>

          </li>
        ))}
      </ul>

      {product && (
        <Modal  isOpen={true} onRequestClose={closeModal}>
            <Zoom >
                <button className='close-modal' onClick={closeModal}>
                    X
                </button>
                <div className='product-details'>
                    <img src={product.image} alt={product.title}></img>
                    <div >
                        <p>
                            <strong>{product.title}</strong>
                        </p>
                        <p>{product.description}</p>
                        <p>
                            Available Sizes: {" "}
                            {product.availableSizes.map((x) =>(
                                <span >
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

export default Products