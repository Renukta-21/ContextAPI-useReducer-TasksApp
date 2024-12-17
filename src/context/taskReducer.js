export const initialState = {
    tasks: [
      {
        id: '1',
        name: 'Task 1',
        description: 'This is a description for Task 1.',
      },
      {
        id: '2',
        name: 'Task 2',
        description: 'This is a description for Task 2.',
      },
      {
        id: '3',
        name: 'Task 3',
        description: 'This is a description for Task 3.',
      },
    ],
  }

  export const tasksReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return {
          ...state,
          tasks: state.tasks.concat(action.payload)
        }
      case 'DELETE_TASK': {
        return {
          ...state,
          tasks: state.tasks.filter((t) => t.id !== action.payload)
        }
      }
      case 'EDIT_TASK':{
        const updatedTask = action.payload
        return {
          ...state,
          tasks: state.tasks.map(t=> t.id !== updatedTask.id ? t : updatedTask)
        }
      }
      default:
        return state
    }
  }