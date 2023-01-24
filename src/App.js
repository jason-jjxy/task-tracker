import Header from './components/Header'
import Tasks from './components/Tasks'
import React, {useEffect, useState} from 'react'

const App = () => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text:" Meeting at School",
        },
        {
            id: 2,
            text: "Food Shopping"
        }
    ])
    // Delete Task
    const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id))
    }

    // Toggle Reminder 
    const toggleReminder = (id) => {
      setTasks(
        tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task)
      )
    }


  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks  tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
      ): (
        "No tasks to Show"
      )}
    </div>
  )
}



export default App;
