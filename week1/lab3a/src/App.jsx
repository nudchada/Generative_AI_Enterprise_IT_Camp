import { useState } from 'react'
import './App.css'
import TodoItem from './components/TodoItem'

const initialTodos = [
  {
    id: 1,
    title: 'Review project brief',
    priority: 'High',
    dueDate: '2026-10-25',
    completed: false,
  },
  {
    id: 2,
    title: 'Prepare demo script',
    priority: 'Medium',
    dueDate: '2026-10-27',
    completed: true,
  },
]

const emptyForm = {
  title: '',
  priority: 'Medium',
  dueDate: '',
}

function App() {
  const [todos, setTodos] = useState(initialTodos)
  const [formData, setFormData] = useState(emptyForm)
  const [editingId, setEditingId] = useState(null)

  const completedCount = todos.filter((todo) => todo.completed).length
  const pendingCount = todos.length - completedCount

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const resetForm = () => {
    setFormData(emptyForm)
    setEditingId(null)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const trimmedTitle = formData.title.trim()

    if (!trimmedTitle) {
      return
    }

    if (editingId) {
      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === editingId
            ? {
                ...todo,
                title: trimmedTitle,
                priority: formData.priority,
                dueDate: formData.dueDate,
              }
            : todo,
        ),
      )
    } else {
      setTodos((prev) => [
        {
          id: Date.now(),
          title: trimmedTitle,
          priority: formData.priority,
          dueDate: formData.dueDate,
          completed: false,
        },
        ...prev,
      ])
    }

    resetForm()
  }

  const handleToggle = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    )
  }

  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))

    if (editingId === id) {
      resetForm()
    }
  }

  const handleEdit = (todo) => {
    setEditingId(todo.id)
    setFormData({
      title: todo.title,
      priority: todo.priority,
      dueDate: todo.dueDate,
    })
  }

  return (
    <main className="app-shell">
      <header className="app-header">
        <div>
          <p className="eyebrow">Smart Todo</p>
          <h1>Keep your tasks in control</h1>
        </div>

        <div className="summary-box">
          <span>{pendingCount} pending</span>
          <span>{completedCount} done</span>
        </div>
      </header>

      <form className="todo-form" onSubmit={handleSubmit}>
        <label className="field-group title-field">
          <span>Todo title</span>
          <input
            type="text"
            name="title"
            placeholder="Add a new task"
            value={formData.title}
            onChange={handleInputChange}
          />
        </label>

        <label className="field-group">
          <span>Priority</span>
          <select
            name="priority"
            value={formData.priority}
            onChange={handleInputChange}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </label>

        <label className="field-group">
          <span>Due date</span>
          <input
            type="date"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleInputChange}
          />
        </label>

        <div className="form-actions">
          <button type="submit" className="primary-btn">
            {editingId ? 'Save changes' : 'Add todo'}
          </button>

          {editingId && (
            <button type="button" className="secondary-btn" onClick={resetForm}>
              Cancel
            </button>
          )}
        </div>
      </form>

      <ul className="todo-list">
        {todos.length > 0 ? (
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              title={todo.title}
              priority={todo.priority}
              dueDate={todo.dueDate}
              completed={todo.completed}
              onToggle={() => handleToggle(todo.id)}
              onDelete={() => handleDelete(todo.id)}
              onEdit={() => handleEdit(todo)}
            />
          ))
        ) : (
          <li className="empty-state">No tasks yet. Add your first todo.</li>
        )}
      </ul>
    </main>
  )
}

export default App
