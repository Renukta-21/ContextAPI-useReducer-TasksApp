import { v4 as uuid } from "uuid"

function AddTask({dispatch}) {
    const handleSubmit = (e) => {
        e.preventDefault()
        const newForm = new FormData(e.target)
        const task = Object.fromEntries(newForm)
        dispatch({type:'ADD_TASK', payload:{...task, id:uuid()}})
      }
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="name" name='name'/>
        <input type="text" placeholder="description" name='description'/>
        <button>Save</button>
      </form>
  )
}

export default AddTask