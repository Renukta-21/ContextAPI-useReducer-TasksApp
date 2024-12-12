import { v4 as uuid } from 'uuid'
import { GlobalContext } from '../context/GlobalContext'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router'

function AddTask() {
  const { dispatch } = useContext(GlobalContext)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const newForm = new FormData(e.target)
    const task = Object.fromEntries(newForm)
    dispatch({ type: 'ADD_TASK', payload: { ...task, id: uuid() } })
    navigate('/')
  }
  
  return (
    <div>
      <div>
        <Link to={'/'}>Tasks App</Link>
      </div>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="name" name="name" />
      <input type="text" placeholder="description" name="description" />
      <button>Save</button>
    </form>
    </div>
  )
}

export default AddTask
