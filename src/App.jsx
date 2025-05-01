import './App.css'
import { FaBeer } from 'react-icons/fa'
import toast , {Toaster} from 'react-hot-toast'


const notify = () => toast('This is your Toast !');

function App() {
  return (
    <div>
      <div className='flex items-center justify-center h-screen bg-gray-800 '>
        <div className='text-amber-300 text-5xl font-bold'>Meri Dukaan</div>
        <div className='mt-4 text-fuchsia-400 text-3xl font-bold'><FaBeer /></div>
        <button onClick = {notify} >Hot Toast</button>
        <Toaster/>
        </div>
    </div>
  )
}

export default App
