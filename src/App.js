
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './compoenent/Navbar';
import ProductList from './compoenent/ProductList';
import Sliders from './compoenent/Sliders';
import About from './compoenent/About';
import ProductDetails from './compoenent/ProductDetails';
import AddProduct from './compoenent/addProduct';
import ViewProduct from './compoenent/viewProduct';

function App() {
  return (
  <>

<div className='App'>
  <Navbar/>
<Routes>
  <Route path='/' element={
<>

<Sliders/>
<ProductList/>

</>
  } />
<Route path='/about' element={<About />}/>
<Route path='/about/add' element={<AddProduct />}/>
<Route path='/about/:ProductId' element={<ViewProduct />}/>
<Route path='/Product/:ProductId' element={<ProductDetails />}/>

</Routes>


</div >
  </>
  );
}

export default App;
