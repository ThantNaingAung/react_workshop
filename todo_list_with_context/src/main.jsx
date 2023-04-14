import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { TodoListContextProvider } from './contexts/TodoListContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoListContextProvider><App /></TodoListContextProvider>
  </React.StrictMode>,
)
