import { useReducer } from "react"

function App() {
  const tasksReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return 0

      default:
        return state
    }
  }
  const [state, dispatch] = useReducer(tasksReducer, [])
  
  return (
    <div>
      <h2>Task App</h2>
      <p>{state.length}</p>
    </div>
  )
}

export default App
