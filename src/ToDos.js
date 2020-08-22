import React, { useState } from 'react'
import ToDo from './ToDo'
import './ToDos.css'

function ToDos () {
  const [todos, updateTodos] = useState([
    {
      task: "Feed Blair",
      done: false
    }, {
      task: "clean apartment",
      done: false
    }, {
      task: "create debugging assignment",
      done: true
    }
  ])

  const [newTodo, updateNewTodo] = useState('');

  const handleDone = (e, idx) => {
    console.log(idx);
    updateTodos(prevTodos => 
      prevTodos.map((todo, index) => {
        if (index === idx) {
          return {
            ...todo,
            done: !todo.done,
          }
        }
        return todo;
      })
    );
  }

  const addTodo = (e) => {
    e.preventDefault()

    updateTodos(prevTodos => {
      return [...prevTodos, {
        task: newTodo,
        done: false
      }];
    })
    updateNewTodo('');
  }

  return (
    <>
      <h1>Things to do today...</h1>
      <form onSubmit={addTodo}>
        <label>
          <input
            type="text"
            placeholder="What do you need to do today?"
            value={newTodo}
            onChange={(e) => updateNewTodo(e.target.value)}
          />
        </label>
      </form>
      <div className="todo-container">
        {todos.map((todo, idx) =>
        <ToDo
          task={todo.task}
          done={todo.done}
          handleDone={e => handleDone(e, idx)}
          key={idx}
        />
        )}
      </div>
    </>
  )
}

export default ToDos
