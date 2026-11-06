function TodoItem({ task, onToggle }) {
  return (
    <li className={`todo-item ${task.completed ? 'completed' : ''}`}>
      <div className="todo-main">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          aria-label={`Toggle ${task.title}`}
        />
        <div className="todo-copy">
          <h3>{task.title}</h3>
        </div>
      </div>
      <div className="todo-actions">
        <button
          type="button"
          className="secondary-btn"
          onClick={() => onToggle(task.id)}
        >
          {task.completed ? 'Mark Active' : 'Mark Done'}
        </button>
      </div>
    </li>
  )
}

export default TodoItem
