import {useState} from 'react'
import React from 'react';
import './styles.css'
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { MdOutlineCheckBox } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";
import { Todo } from '../model';

interface ToDoItem {
    id: number;
    todo: string;
    todos: Array<Todo>
    setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
    isDone: boolean;
}

const ToDo: React.FC<ToDoItem> = (props) => {
    const [isDone, setIsDone ] = useState<boolean> (props.isDone)

    function toggleIsDone() {
        setIsDone (prevIsDone => !prevIsDone)
    };

    function complete (isDone: boolean){
        return isDone ? <MdOutlineCheckBox size={26}/> :<MdOutlineCheckBoxOutlineBlank size={26} />
    };

    function handleDelete () {
        props.setTodos(props.todos.filter(todo => todo.id !== props.id))
    }

  return (
    <div>
        <section className='toDoListElements'>
            <p style = {{ textDecoration: isDone ? 'line-through' : 'none'}}>{props.todo}</p>
            <div className='toDoListElements_submit'>
                <button className='toDoListElements_button' onClick={toggleIsDone}>
                    {complete(isDone)}
                </button>
                <button className='toDoListElements_button' onClick = {handleDelete} >
                    <TiDeleteOutline size={26}/>
                </button>
            </div>
        </section>
    </div>
  )
}

export default ToDo
