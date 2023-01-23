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
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  );
}


export default App;
