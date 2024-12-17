import { useReducer } from "react"
import { GlobalContext } from "./GlobalContext"
import { v4 as uuid } from "uuid"
import { tasksReducer, initialState } from "./taskReducer"

export function GlobalContextProvider ({children}){
    const [state, dispatch] = useReducer(tasksReducer, initialState)

    const addTask = (task)=>{
      dispatch({type:'ADD_TASK', payload:{...task, id:uuid()}})
    }

    const editTask = (editedTask)=>{
      dispatch({type:'EDIT_TASK', payload:editedTask})
    }
    return(
        <GlobalContext.Provider value={{state, addTask, editTask}}>
            {children}
        </GlobalContext.Provider>
    )
  }
  export default GlobalContextProvider