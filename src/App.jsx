import { useReducer } from 'react'
import AddTask from './components/AddTask'
import TaskList from './components/TaskList'
import { GlobalContext } from './context/GlobalContext'

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
  
  return (
    <GlobalContext.Provider value={{state, dispatch}}>
      <div>
      <h2>Task App</h2>
      <AddTask />
      <TaskList/>
    </div>
    </GlobalContext.Provider>
  )
}

export default App
