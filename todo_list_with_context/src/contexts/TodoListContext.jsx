import React, {  createContext,useState ,useContext} from "react";
const TodoListContext = createContext([]);

export const GetTodoList = () => {
  const todoList = useContext(TodoListContext);
  return todoList;
};
export const TodoListContextProvider = ({children}) => {
  const [todos, setTodoTask] = useState([]);
  const value = {
    todos,
    setTodoTask,
  };
  return (
    <TodoListContext.Provider value={value}>
      {children}
    </TodoListContext.Provider>
  );
};
