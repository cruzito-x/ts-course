import { useState } from "react";
import { TasksList } from './TasksList';

export const TasksApp = () => {
  const [newTask, setNewTask] = useState<string>('');
  const [tasksList, setTasksList] = useState<string[]>([]);

  const handleAddTask = () => {
    if (newTask.trim() === '') return;
    setTasksList([...tasksList, newTask]);
    setNewTask('');
  }

  const handleDeleteTask = (taskIndex : number) => {
    const updatedTasksList = tasksList.filter((_, index) => index!== taskIndex);
    setTasksList(updatedTasksList);
  }

  return (
    <>
    <h1> Tasks list </h1>
    <div>
      <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder='New task' />
      <button onClick={handleAddTask}> Add Task </button>
    </div>
    <TasksList tasksList={tasksList} deleteTask={handleDeleteTask}></TasksList>
    </>
  )
}