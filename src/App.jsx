import { useReducer } from "react"

function App() {
  const initialState = {
    tasks:[
      {
        id: '1',
        name: 'Task 1',
        description: 'This is a description for Task 1.'
      },
      {
        id: '2',
        name: 'Task 2',
        description: 'This is a description for Task 2.'
      },
      {
        id: '3',
        name: 'Task 3',
        description: 'This is a description for Task 3.'
      }
    ]
    
  };
  
  const tasksReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return 0

      default:
        return state
    }
  }
  const [state, dispatch] = useReducer(tasksReducer, initialState)

  return (
    <div>
      <h2>Task App</h2>
      {state.tasks.map(t=>(
        <div key={t.id}>
          <small>{t.id}</small>
          <h3>{t.name}</h3>
          <p>{t.description}</p>
          <button>DELETE</button>
          {/* <button>EDIT</button> */}
          <hr />
        </div>
      ))}

    </div>
  )
}

export default App
