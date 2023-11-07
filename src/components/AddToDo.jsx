import { useReducer } from 'react';

const todoReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return [...state, { text: action.text, completed: false }]
      case 'TOGGLE_TODO':
        return state.map((todo, index) =>
          index === action.index ? { ...todo, completed: !todo.completed } : todo
        )
      default:
        throw new Error()
    }
  }
  
  export const AddToDo = () => {
    const [todos, dispatch] = useReducer(todoReducer, [])
  
    const addTodo = (text) => dispatch({ type: 'ADD_TODO', text })
    const toggleTodo = (index) => dispatch({ type: 'TOGGLE_TODO', index })
  
    return (
      <>
        <ul>
          {todos.map((todo, index) => (
            <li
              key={index}
              onClick={() => toggleTodo(index)}
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            >
              {todo.text}
            </li>
          ))}
        </ul>
        <button onClick={() => addTodo(prompt('Enter todo text:'))}>
          Add Todo
        </button>
      </>
    )
  }