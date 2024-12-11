import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

function TaskList() {
  const { state, dispatch } = useContext(GlobalContext)

  return (
    <div>
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
          <hr />
        </div>
      ))}
    </div>
  )
}

export default TaskList