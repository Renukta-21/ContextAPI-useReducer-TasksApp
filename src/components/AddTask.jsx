import { GlobalContext } from '../context/GlobalContext'
import { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router'

function AddTask() {
  const [task, setTask] = useState({
    name: '',
    description: ''
  })

  const { addTask, state } = useContext(GlobalContext)
  const navigate = useNavigate()
  const params = useParams()

  const handleSubmit = (e) => {
    e.preventDefault()
    addTask(task)
    navigate('/')
  }

  useEffect(() => {
    if (params.id) {
      const element = state.tasks.find(t => t.id === params.id)
    }
    console.log('Adding task')
  }, [])

  return (
    <div>
      <div>
        <Link to={'/'}>Tasks App</Link>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="name" name="name" onChange={(e) => setTask({ ...task, [e.target.name]: e.target.value })} />
        <input type="text" placeholder="description" name="description" onChange={(e) => setTask({ ...task, [e.target.name]: e.target.value })} />
        <button>Save</button>
      </form>
    </div>
  )
}

export default AddTask
