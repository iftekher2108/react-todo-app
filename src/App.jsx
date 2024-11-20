import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import TodoList from './TodoList.jsx';
function App() {

  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  // useEffect(()=>{
    
  // },[])

  const inputValue = () => {
    if(input) {
     setTodos([...todos,input]); 
     setInput('')
    }
    else {
      return null;
    } 
  }

  

  return (
    <>
      <div className='main'>
        <h1 className='p-3 text-center text-white mb-5'>
          React Todo App
        </h1>
        <div className='row align-items-center justify-content-center mb-4'>
          <div className='col-md-6'>
            <div className='card'>
              <div className='card-header p-3 fw-bold fs-3 text-white bg-primary'>Todo App</div>
              <div className='card-body'>
                <div className='row g-3 my-2'>
                  <div className='col-md-9'>
                    <input type="text" className='form-control' onKeyDown={(e) => e.key === "Enter" && inputValue()} value={input} onInput={(e) => {setInput(e.target.value)}} placeholder='Enter Text' />
                  </div>
                  <div className='col-md-3'>
                    <button onClick={inputValue} className='btn btn-primary rounded-1'>Add Todo</button>
                  </div>
                  <p>{input ? input : 'iftekher mahmud'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <TodoList todos={todos} setTodos={setTodos} />
       

      </div>


    </>
  )
}

export default App
