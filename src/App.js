
import Header from './Header';
import data from './data.json'
import Products from './Products';
// import Filter from './Filter';
// import Cart from './Cart';
import { useState } from 'react';
import Footer from './Footer';



function App() {
  // const [sort, setSort] = useState('')
  // const [size, setSize] = useState('')
  const [products, setProduct] = useState(data.products)
  const  [cartItems, setCartItems] = useState([])

  // function removeFromCart(product){
  //   const cartItemss = cartItems.slice
  //   setCartItems({cartItemss: cartItemss.filter((x) => x._id !== product._id)})
  // }
 
  const addToCart = (product) => {
    
      const cartItemss = cartItems.slice()
      // console.log(cartItems)
     
    let alreadyInCart = false;
    cartItemss.forEach((item) =>{
      if(item._id === product._id){
        item.count++;
        alreadyInCart= true;
      }
    });
    if(!alreadyInCart){
      cartItemss.push({...product, count: 1})
    }
    setCartItems(cartItemss)
    
  }
  
  
  // function sortProducts(e){
  //   console.log(e.target.value)
  //   const sort = e.target.value;
  //   setSort(sort)
  //   setProduct(products
  //     .slice()
  //     .sort((a,b) => 
  //       sort === "lowest"
  //         ? a.price > b.price
  //           ? 1
  //           : -1
  //         : sort === "highest"
  //         ? a.price < b.price
  //           ? 1
  //           : -1
  //         : a._id < b._id
  //         ? 1
  //           : -1 
  //       )   
  //   )

  // }

  // function filterProducts(e){
  //   console.log(e.target.value)
  //   if(e.target.value === ""){
  //     setSize(e.target.value)
  //     setProduct(data.products)
  //   }else{
  //     setSize(e.target.value)
  //     setProduct(data.products.filter(
  //       (product) => product.availableSizes.indexOf(e.target.value) >= 0
  //     ))
  //   }
    
  // }

  return (
    <div className="App" > 
      <header>
        {/* <Filter filterProducts={filterProducts} sortProducts={sortProducts} size={size} sort={sort} count={products.length}/> */}
        <Header products={products} addToCart={addToCart}/>
        <Products products={products} addToCart={addToCart}/> 
        <Footer/>
      </header> 
      
      {/* <Cart removeFromCart={removeFromCart} cartItems={cartItems}/>    */}
    </div>
  );
}

export default App;
