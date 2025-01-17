
import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([])
  const [tempTask, setTempTask] = useState('')
  
  function addTask() {
    setTasks([...tasks, tempTask])
    setTempTask('')
  }
    
  return (
    <div className="App">
      <input data-testid="task-field" type="text" value={tempTask} onChange={event => setTempTask(event.target.value)} />
      <button data-testid="btn-add" onClick={addTask} type="button">Add</button>
      <ul>
        {tasks.map(task => (
          <li>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
