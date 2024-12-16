import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { Link, useNavigate } from 'react-router'

function TaskList() {
  const { state, dispatch } = useContext(GlobalContext)
  const navigate = useNavigate()

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
          <button onClick={()=>{
            navigate(`/edit-task/${t.id}`)          
          }}>Edit</button>
          <hr />
        </div>
      ))}
    </div>
  )
}

export default TaskList

