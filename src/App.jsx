import React from 'react';
import { Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Header from './components/Header';
import Products from './components/Products';
import Contact from './components/Contact';
import ProductsDetails from './components/ProductsDetails';
import NotFound from './components/NotFound';
import './components/styles.css'

const App = () => {
  return (
    <div>
<Header/>
<Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/products' element={<Products/>}></Route>
      <Route path='/products/:id' element={<ProductsDetails/>}></Route>
      <Route path='*' element={<NotFound/>}></Route>
    </Routes>
    </div>
  );
};

export default App;