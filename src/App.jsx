import { useState, useEffect } from 'react'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])

  // 从localStorage加载数据
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos')
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos))
    } else {
      // 如果没有保存的数据，则设置默认示例
      setTodos([
        {
          id: 1,
          text: '学习React基础知识',
          completed: false,
          createdAt: new Date().toISOString()
        },
        {
          id: 2,
          text: '创建待办事项应用',
          completed: true,
          createdAt: new Date().toISOString()
        }
      ])
    }
  }, [])

  // 保存数据到localStorage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
      createdAt: new Date().toISOString()
    }
    setTodos([...todos, newTodo])
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="app">
      <div className="container">
        <header className="app-header">
          <h1>待办事项管理</h1>
          <p>添加和管理您的日常任务</p>
        </header>
        
        <main>
          <TodoForm onAdd={addTodo} />
          <TodoList 
            todos={todos} 
            onToggle={toggleTodo} 
            onDelete={deleteTodo} 
          />
        </main>
      </div>
    </div>
  )
}

export default App