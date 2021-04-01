
import './App.css';
import React,{Component,useState,useEffect} from'react'
import Form from './components/Form'
import Todolist from './components/Todolist' 
function App() {

  const [inputText,setInputText]=useState('');
  const [todos,setTodos]=useState([]);
  const [status,setStatus]=useState("all");
  const [filteredTodos,setfilteredTodos]=useState([]); 

  useEffect(()=>{
    getLocalTodos();
  },[])

  useEffect(()=>{
    filterHandler();
    saveLocalTodos();
  }, [todos,status])

  const filterHandler=()=>{
    switch(status){
      case 'completed':setfilteredTodos(todos.filter(todo=>todo.completed===true));
        break;
      case 'uncompleted':setfilteredTodos(todos.filter(todo=>todo.completed===false));
        break;
      default:
            setfilteredTodos(todos);
            break;
    }
  }

  const saveLocalTodos=()=>{
      localStorage.setItem('todos',JSON.stringify(todos));
  }
  const getLocalTodos=()=>{
    if(localStorage.getItem ('todos')===null){
      localStorage.setItem('todos',JSON.stringify([]));
    }else{
      let todosLocal=JSON.parse(localStorage.getItem("todos"));
      setTodos(todosLocal);
    }
  }
  return (
    <div className="App">
      <header>
        <h1>Madhan's ToDo List</h1>
      </header>
      <Form 
        todos={todos} 
        setTodos={setTodos} 
        inputText={inputText}  
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <Todolist 
        todos={todos} 
        setTodos={setTodos}
        filteredTodos={filteredTodos} 
      />
    </div>
  );
}

export default App;
