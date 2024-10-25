import { useState } from 'react'
import toast from '/toast.jpeg'
import './App.css'
import ToastList from './components/ToastList';


function App() {
  const [count, setCount] = useState(0);
  const [toasts, setToasts] = useState([]);
  const autoCloseDuration = 2;

  const removeToast = (id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  const showToast = (message, type)=>{
    const toast = {
      id: Date.now(),
      message,
      type
    };

    setToasts((prev) => [...prev, toast]);
    setCount(count +1);

    setTimeout(() => {
      removeToast(toast.id);
    }, autoCloseDuration * 1000);
  }

  return (
    <>
    <div className='flex justify-center items-center flex-col h-full'>
      <div className='flex justify-center items-center'>
        <img src={toast} alt="toast logo" className=' h-20 logo'/>
      </div>
      <h1>Toast</h1>
      <div className="card">
        <button onClick={()=> showToast(`Hi, this is toast no. ${count}`, "success")} className='button' >
          Open Toast
        </button>
      </div>
      <p className="read-the-docs">
        Click on the button to see Toasts!!
      </p>
      <ToastList data={toasts} removeToast={removeToast}/>
    </div>
      
    </>
  )
}

export default App
