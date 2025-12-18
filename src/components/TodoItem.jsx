import './TodoItem.css'

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="todo-checkbox"
        />
        <span className="todo-text">{todo.text}</span>
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className="delete-button"
        aria-label="删除任务"
      >
        删除
      </button>
    </li>
  )
}

export default TodoItem