import React, { useState } from 'react';
import './App.css';
// auto import by pressing ctrl space
import InputField from './components/InputField';
import { Todo } from './model';

// App -cosnt arrow function instead of function
// App type is defined as a react functional component
const App: React.FC = () => {
  const [todo, setTodo] = useState<string> ("")
  const[todos,setTodos] = useState<Todo[]>([])
  // console.log(todo);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, {id: Date.now(), todo: todo, isDone: false}]);
      setTodo("");
    }
  };
  return (
    <div className="App">
      <span className='heading'> Taskify</span>
      <InputField todo = {todo} setTodo = {setTodo} handleAdd={handleAdd}/>
    </div>
  );
}

export default App;
