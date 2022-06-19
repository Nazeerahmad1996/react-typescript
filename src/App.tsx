import React, { Fragment, useState } from 'react';
import logo from './logo.svg';
import './App.css';

type event = React.FormEvent<HTMLFormElement>

interface ITodo {
  text: string,
  complete: boolean
}

function App() {

  const [value, setValue] = useState<string>("")
  const [todo, setTodo] = useState<ITodo[]>([])


  const handleubmit = (e: event): void => {
    e.preventDefault()
    addTodo(value)
    setValue("")
  }

  const addTodo = (value: string): void => {
    const newTodos: ITodo[] = [...todo, { text: value, complete: false }]
    setTodo(newTodos)
  }

  const completeTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todo]
    newTodos[index].complete = !newTodos[index].complete
    setTodo(newTodos)
  }

  const removeTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todo]
    newTodos.splice(index, 1)
    setTodo(newTodos)
  }
  return (
    <Fragment>
      <h1>To do list</h1>
      <form onSubmit={handleubmit}>
        <input type="text" value={value} id="" onChange={(e) => setValue(e.target.value)} required />
        <button type='submit'>Add todo</button>
      </form>
      {todo.map((e, index) => {
        return (
          <div>
            <p key={index}>{e.text}</p>
            <button onClick={() => completeTodo(index)}>{e.complete ? "Completed" : "InComplete"}</button>
            <button onClick={() => removeTodo(index)}>Remove</button>

          </div>
        )
      })}
    </Fragment>
  );
}

export default App;
