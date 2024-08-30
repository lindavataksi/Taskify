// SHORTCUT RAFCE
// BEM Classnaming convention
import React from 'react'
import './styles.css'
interface Props {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleAdd: (e: React.FormEvent) => void;
}
// const InputField = ({todo, setTodo}: Props) => {

 const InputField:React.FC <Props>= ({todo, setTodo, handleAdd}) => {
  return (
    <form action="" className="input">
        <input 
        value = {todo}
        onChange={
            (e) => setTodo(e.target.value)
        }
        onSubmit = {handleAdd}
        type='input' placeholder="Enter a task" className='input_box' />
        <button className="input_submit" type='submit'> Go</button>
    </form>
  )
}

export default InputField
