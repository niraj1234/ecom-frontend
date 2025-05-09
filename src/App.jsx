import './App.css'
import { FaBeer } from 'react-icons/fa'
import toast , {Toaster} from 'react-hot-toast'
import Products from './components/products/Products'
import { BrowserRouter  as Router , Routes ,Route } from 'react-router-dom';
import Home from './components/home/Home';
import NavBar from './components/shared/NavBar';
import About from './components/About';
import Contact from './components/Contact';
import React from 'react';
import Cart from './components/cart/Cart';


const notify = () => toast('This is your Toast !');

function App() {
  return (

    <React.Fragment>
    <Router>
        <NavBar/>
        <Routes>
          <Route  path='/' element={<Home/>}/>
          <Route  path='/products' element={<Products/>}/>
          <Route  path='/about' element={<About/>}/>
          <Route  path='/contact' element={<Contact/>}/>
          <Route  path='/cart' element={<Cart/>}/>
        </Routes>
    </Router>

    <Toaster position='top-center'   
              toastOptions={{
                    className: '',
                    duration: 4000,
                    removeDelay: 2000,
                    style: {
                      background: '#FDFDFD',
                      color: '#222222',
                      padding:'20px 30px',
                      border: '4px #945272 solid',
                      fontSize:'1.5rem',
                      marginTop:'70px',
                      }
                    }} />

    </React.Fragment>


    // <div className='bg-gray-200'>
    //     <div className='text-amber-300 text-2xl font-bold bg-gray-700 p-2 border-b-4 border-b-cyan-700'>Meri Dukaan</div>
    //     <div className=''>
    //       <Products/>
    //     </div>        
    // </div>


)
}

export default App
