import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { Link } from 'react-router'

function TaskList() {
  const { state, dispatch } = useContext(GlobalContext)

  return (
    <div>
      <div style={{display:'flex', justifyContent:'space-between'}}>
      <Link to={'/'}>Tasks App</Link>
      <Link to={'/add-task'}>Add task</Link>
      </div>
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

