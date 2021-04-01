import React from 'react'
import Todo from './Todo'
const Todolist=({todos,setTodos,filteredTodos})=>{
    //console.log(todos);
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map(todo=>(
                    <Todo 
                        todo={todo} 
                        todos={todos} 
                        setTodos={setTodos}
                        text={todo.text} 
                        key={todo.id}
                    /> 
                ))}
            </ul>
        </div>
    );
}
export default Todolist