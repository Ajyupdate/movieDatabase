import React from 'react'


function Products({products}) {
  var firstThreeProduct = products.slice(0,3).map((product) => {
    return product 
  })
  
    
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
                    <h6>shop</h6>
                  </div>
                  
                </a>
                
              </div>
            </li>
              
          ))}  

      </ul>
    </div>  
  )
}

export default Products