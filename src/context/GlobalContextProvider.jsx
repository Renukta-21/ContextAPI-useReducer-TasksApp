import { useReducer } from "react"
import { GlobalContext } from "./GlobalContext"
import { v4 as uuid } from "uuid"

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
          tasks: state.tasks.filter((t) => t.id !== action.payload)
        }
      }
      case 'EDIT_TASK':{
        const updatedTask = action.payload
        return {
          ...state,
          tasks: state.tasks.map(t=> t.id !== updatedTask.id ? t : updatedTask)
        }
      }
      default:
        return state
    }
  }


export function GlobalContextProvider ({children}){
    const [state, dispatch] = useReducer(tasksReducer, initialState)

    const addTask = (task)=>{
      dispatch({type:'ADD_TASK', payload:{...task, id:uuid()}})
    }

    return(
        <GlobalContext.Provider value={{state, addTask, dispatch}}>
            {children}
        </GlobalContext.Provider>
    )
  }
  export default GlobalContextProvider