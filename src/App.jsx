import { Routes,BrowserRouter, Route } from 'react-router'
import AddTask from './components/AddTask'
import Header from './components/Header'
import TaskList from './components/TaskList'

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
         <Route path='/' element={ <TaskList />}/>
         <Route path='/add-task' element={ <AddTask />}/>
         <Route path='/edit-task/:id' element={ <AddTask />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App
