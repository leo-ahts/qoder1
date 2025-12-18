import TodoItem from './TodoItem'
import './TodoList.css'

const TodoList = ({ todos, onToggle, onDelete }) => {
  const activeTodos = todos.filter(todo => !todo.completed)
  const completedTodos = todos.filter(todo => todo.completed)

  return (
    <div className="todo-list">
      {activeTodos.length > 0 && (
        <div className="todo-section">
          <h2>待完成 ({activeTodos.length})</h2>
          <ul className="todo-items">
            {activeTodos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={onToggle}
                onDelete={onDelete}
              />
            ))}
          </ul>
        </div>
      )}

      {completedTodos.length > 0 && (
        <div className="todo-section">
          <h2>已完成 ({completedTodos.length})</h2>
          <ul className="todo-items">
            {completedTodos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={onToggle}
                onDelete={onDelete}
              />
            ))}
          </ul>
        </div>
      )}

      {todos.length === 0 && (
        <div className="empty-state">
          <p>暂无待办事项</p>
          <p>添加您的第一个任务吧！</p>
        </div>
      )}
    </div>
  )
}

export default TodoList