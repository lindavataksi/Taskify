import React, { useState } from 'react';
import './App.css';
// auto import by pressing ctrl space
import InputField from './components/InputField';
import { Todo } from './model';
import ToDo from './components/ToDo';

// App -cosnt arrow function instead of function
// App type is defined as a react functional component
const App: React.FC = () => {
  const [todo, setTodo] = useState<string> ("")
  const[todos,setTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, {id: Date.now(), todo: todo, isDone: false}]);
      setTodo("");
    }
  };
  const card = todos.map((item) => (
    <div >
      <ToDo 
      id = {item.id}
      isDone = {item.isDone}
      todo = {item.todo}
      todos = {todos}
      setTodos = {setTodos}

      />
    </div>
  ))
  console.log(todos)
  return (
    <div className="App">
      <span className='heading'> Taskify</span>
      <InputField todo = {todo} setTodo = {setTodo} handleAdd={handleAdd}/>
      {/* {todos.map((t) => (
        <li>{t.todo}</li>
      ))} */}
      {card}
      
      {/* <ToDo 
        id = {todo.id}
        todos = {todos}
        setTodos = {setTodos}/> */}
        
      
    </div> 
  );
}

export default App;
