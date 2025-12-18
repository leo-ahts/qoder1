import { useState } from 'react'
import './TodoForm.css'

const TodoForm = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim() === '') return
    
    onAdd(inputValue)
    setInputValue('')
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="添加新的待办事项..."
          className="todo-input"
        />
        <button type="submit" className="add-button">
          添加
        </button>
      </div>
    </form>
  )
}

export default TodoForm