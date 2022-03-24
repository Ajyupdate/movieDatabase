
import Header from './Header';
import data from './data.json'
import Products from './Products';



function App() {
  
  return (
    <div className="App">
      <header>
        <Header products={data.products}/>
        <Products products={data.products}/> 
      </header>
    </div>
  );
}

export default App;
