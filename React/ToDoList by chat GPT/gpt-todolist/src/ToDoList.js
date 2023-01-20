import React, { useState } from 'react';

function Task({ task, index, completeTask, deleteTask }) {
  return (
    <div className={`task ${task.isCompleted ? "completed" : ""}`}>
      {task.text}
      <div>
        <button onClick={() => completeTask(index)}>Done</button>
        <button onClick={() => deleteTask(index)}>Delete</button>
      </div>
    </div>
  );
}

function ToDoList() {
  const [tasks, setTasks] = useState([
    { text: "Learn React", isCompleted: false },
    { text: "Build a to-do list app", isCompleted: false },
  ]);

  const [newTask, setNewTask] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setTasks([...tasks, { text: newTask, isCompleted: false }]);
    setNewTask("");
  }

  function completeTask(index) {
    const newTasks = [...tasks];
    newTasks[index].isCompleted = true;
    setTasks(newTasks);
  }

  function deleteTask(index) {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
      <div className="task-list">
        {tasks.map((task, index) => (
          <Task
            key={index}
            task={task}
            index={index}
            completeTask={completeTask}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </div>
  );
}

export default ToDoList;
