import Task from "./Task"

type TaskListProps = {
  tasksList: string[],
  deleteTask: (index:number) => void
}

export const TasksList = ({tasksList, deleteTask}: TaskListProps) => {
  return (
    <div className="taskList">
      {tasksList.map((task, index) => (
        <Task key={index} task={task} deleteTask={() => deleteTask(index)}></Task>
      ))}
    </div>
  )
}