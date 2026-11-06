import { useState } from 'react'
import './App.css'
import TodoList from './components/TodoList'

const mockTasks = [
  { id: 1, title: 'Finish React basics', completed: false },
  { id: 2, title: 'Practice state update', completed: false },
]

export default function App() {
  const [tasks, setTasks] = useState(mockTasks)

  const handleToggle = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    )
  }

  const completedCount = tasks.filter((task) => task.completed).length
  const activeCount = tasks.length - completedCount

  return (
    <main className="app-shell">
      <header className="app-header">
        <div>
          <p className="eyebrow">Lab 8A</p>
          <h1>React Todo Mock Data</h1>
        </div>
        <div className="summary-box">
          <span>{activeCount} active</span>
          <span>{completedCount} completed</span>
        </div>
      </header>

      <TodoList tasks={tasks} onToggle={handleToggle} />
    </main>
  )
}
