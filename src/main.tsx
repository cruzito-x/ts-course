import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { TasksApp } from './components/TasksApp'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TasksApp></TasksApp>
  </React.StrictMode>,
)
