import { GlobalContext } from '../context/GlobalContext'
import { useContext, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router'

function AddTask() {
  const { addTask } = useContext(GlobalContext)
  const navigate = useNavigate()
  const params = useParams()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const newForm = new FormData(e.target)
    const task = Object.fromEntries(newForm)
    addTask(task)
    navigate('/')
  }
  
  useEffect(() => {
    if(params.id){
      return console.log('editing mode')
    }  
    console.log('Adding task')
  }, [])
  
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
