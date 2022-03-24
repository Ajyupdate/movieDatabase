import React from 'react'


function Header({products}) {
    // console.log(products[0].title)
    // const firstProduct = products[0]
    // console.log(firstProduct)

    var first = products.slice(0,1).map((product) => {
        return product 
    })
    
  return (
      <div className='header-container'>
    <div className='header'>
        <div className='nav'>
            <div>
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
                        <button className='first-buy-button'> Buy Now</button>
                        
                    </div>

                    <div className='first-product-image'>
                        <img src={product.image} alt="latest product"/>
                    </div>
                    
                    
                </div>
            ))}
        </div>
        
        
        

    </div>
    </div>


  )
}
export default Header