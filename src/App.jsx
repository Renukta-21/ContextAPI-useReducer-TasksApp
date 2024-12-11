import { useReducer } from 'react'
import { v4 as uuid } from 'uuid'

function App() {
  const initialState = {
    tasks: [
      {
        id: '1',
        name: 'Task 1',
        description: 'This is a description for Task 1.',
      },
      {
        id: '2',
        name: 'Task 2',
        description: 'This is a description for Task 2.',
      },
      {
        id: '3',
        name: 'Task 3',
        description: 'This is a description for Task 3.',
      },
    ],
  }

  const tasksReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return {
          ...state,
          id:uuid(),
          tasks: state.tasks.concat(action.payload)
        }
      case 'DELETE_TASK': {
        return {
          ...state,
          tasks: state.tasks.filter((t) => t.id !== action.payload),
        }
      }
      default:
        return state
    }
  }
  const [state, dispatch] = useReducer(tasksReducer, initialState)
  const handleSubmit = (e) => {
    e.preventDefault()
    const newForm = new FormData(e.target)
    const task = Object.fromEntries(newForm)
    dispatch({type:'ADD_TASK', payload:task})
  }
  return (
    <div>
      <h2>Task App</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="name" name='name'/>
        <input type="text" placeholder="description" name='description'/>
        <button>Save</button>
      </form>

      {state.tasks.map((t) => (
        <div key={t.id}>
          <small>{t.id}</small>
          <h3>{t.name}</h3>
          <p>{t.description}</p>
          <button
            onClick={() => dispatch({ type: 'DELETE_TASK', payload: t.id })}
          >
            DELETE
          </button>
          {/* <button>EDIT</button> */}
          <hr />
        </div>
      ))}
    </div>
  )
}

export default App
