import {useState} from 'react'
import React from 'react';
import './styles.css'
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { MdOutlineCheckBox } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";
import { FaRegSave } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
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
    const [edit, setEdit] = useState<boolean>(false)
    const [isEditTodo, setEditTodo] = useState<string>(props.todo)

    function toggleIsDone() {
        setIsDone (prevIsDone => !prevIsDone)
    };

    function complete (isDone: boolean){
        return isDone ? <MdOutlineCheckBox size={26}/> :<MdOutlineCheckBoxOutlineBlank size={26} />
    };

    function handleDelete () {
        props.setTodos(props.todos.filter(todo => todo.id !== props.id))
    }

    const handleEdit = (e:React.FormEvent, id: number) =>  {
        e.preventDefault();

        props.setTodos(
            props.todos.map(todo => (
            todo.id === id? {...todo, todo: isEditTodo} : todo)
            )
        );
        setEdit(false);
    }

    // const handleSave= (id: number) =>   (e: React.MouseEvent<HTMLButtonElement>){
    //     handleEdit(e as unknown as React.FormEvent, id)
    //     setEdit(false)
    // }

  return (
    <div>
    <form onSubmit= {(e) => handleEdit(e, props.id)}>
        <section className='toDoListElements'>
            {
                edit? <input value = {isEditTodo}
                onChange={(e)  => setEditTodo(e.target.value)}
                /> : <p style = {{ textDecoration: isDone ? 'line-through' : 'none'}}>{props.todo}</p>
            }
            
            <div className='toDoListElements_submit'>
                <button className='toDoListElements_button'
                type = "button"
                onClick = {() =>{
                    console.log("clicked", {edit})
                    if(!edit && !props.isDone){
                        setEdit(!edit);
                    } 
                    console.log("clicked2", {edit})
                }}
                >
                    {edit ? <FaRegSave size={26} /> : <FaEdit size={26}/>}
                </button>
                <button className='toDoListElements_button' onClick={toggleIsDone}>
                    {complete(isDone)}
                </button>
                <button className='toDoListElements_button' onClick = {handleDelete} >
                    <TiDeleteOutline size={26}/>
                </button>
            </div>
        </section>
    </form>
    </div>
  )
}

export default ToDo
