import React, {useEffect, useState} from 'react';

const App = () => {
    const [todoValue, setTodoValue] = useState('')
    const [todoSearchValue, setTodoSearchValue] = useState('')
    const[resultIsNone,setResultIsNone]=useState(false);
    const [todos, setTodos] = useState([
        {
            id: Math.random(),
            taskName: 'Task 1',
            isFinished: false,
        },
        {
            id: Math.random(),
            taskName: 'Task 2',
            isFinished: true,
        },
    ])
let [searchResult,setSearchResult]=useState([]);
    const onAddTask = () => {
        setTodos([
            ...todos,
            {
                id: Math.random(),
                taskName: todoValue,
                isFinished: false,
            }
        ])
        setTodoValue('')
    }

    const onDoneById = (id) => {
        setTodos(prevTodos => {
            return prevTodos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        isFinished: !todo.isFinished
                    }
                }

                return todo;
            })
        })
    }
    const deleteTask=(id)=>{
      setTodos(prevTodos=>{
            return prevTodos.filter((todo)=>todo.id!==id)
        })
    }
    const searchTask=()=>{
        setSearchResult(()=>{
            return todos.filter((todo)=>{
                return new RegExp(todoSearchValue+'\W' , 'i').test(todo.taskName);
            })
            
    }
        
        )

        // console.log(todos.filter((todo)=>todo.taskName.match(new RegExp(todoSearchValue,'i'))))

    }
    useEffect(()=>{

      if(searchResult.length===0){
        setResultIsNone(true)
      }  else{
        setResultIsNone(false)
      }

    },[searchResult])
    return (
        <div>
            <input
                type="text"
                onChange={e => setTodoValue(e.target.value)}
            />
            <button onClick={onAddTask}>Add task</button>
            <br />
            <input
                type="text"
                onChange={e => setTodoSearchValue(e.target.value)}
            /> 
            <button onClick={searchTask}>Search task with task name</button>
            <br />
            <ul>Search Result - 
               
                {resultIsNone ? <li>No result</li> :searchResult.map((result)=>{
                    return ( 
                        <li key={result.id}>{result.taskName} - {result.isFinished ? 'Done' : 'Not finished yet'}</li>
                    )
                })}</ul>
            <br />
            <ul>
                {todos.map(todo => {
                    return <li key={todo.id}>
                        {todo.taskName} - {todo.isFinished ? 'Done' : 'Not finished yet'} -
                        <button onClick={() => onDoneById(todo.id)}>
                            {todo.isFinished ? 'Undo' : 'Done'}
                        </button> -
                        <button onClick={()=>{deleteTask(todo.id)}}>Delete Task</button>
                    </li>
                })}
            </ul>
        </div>
    );
};

export default App;
