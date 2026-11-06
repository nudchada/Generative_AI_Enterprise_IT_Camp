import TodoItem from './TodoItem'

export default function TodoList({ tasks, onToggle }) {
  if (tasks.length === 0) {
    return (
      <ul className="todo-list">
        <li className="empty-state">No tasks available.</li>
      </ul>
    )
  }

  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <TodoItem key={task.id} task={task} onToggle={onToggle} />
      ))}
    </ul>
  )
}

