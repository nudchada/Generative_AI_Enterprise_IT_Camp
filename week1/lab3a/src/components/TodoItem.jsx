function TodoItem({
  title,
  priority,
  dueDate,
  completed,
  onToggle,
  onDelete,
  onEdit,
}) {
  const priorityClass = {
    Low: 'priority-low',
    Medium: 'priority-medium',
    High: 'priority-high',
  }[priority] || 'priority-medium'

  return (
    <li className={`todo-item ${completed ? 'completed' : ''}`}>
      <div className="todo-main">
        <input
          type="checkbox"
          checked={completed}
          onChange={onToggle}
          aria-label={`Mark ${title} as complete`}
        />

        <div className="todo-copy">
          <h3>{title}</h3>
          <div className="todo-meta">
            <span className={`priority-badge ${priorityClass}`}>{priority}</span>
            <span className="todo-date">
              {dueDate ? `Due: ${new Date(dueDate).toLocaleDateString()}` : 'No due date'}
            </span>
          </div>
        </div>
      </div>

      <div className="todo-actions">
        <button type="button" className="secondary-btn" onClick={onEdit}>
          Edit
        </button>
        <button type="button" className="danger-btn" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
