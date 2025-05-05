import './App.css'
import { FaBeer } from 'react-icons/fa'
import toast , {Toaster} from 'react-hot-toast'
import Products from './components/products/Products'

const notify = () => toast('This is your Toast !');

function App() {
  return (
    <div className='bg-gray-200'>
        <div className='text-amber-300 text-2xl font-bold bg-gray-700 p-2 border-b-4 border-b-cyan-700'>Meri Dukaan</div>
        <div className=''>
          <Products/>
        </div>
        
    </div>
  )
}

export default App
