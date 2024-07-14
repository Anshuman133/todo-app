
import { useState } from 'react'
import { CreateTodo } from './component/Component'
import { Todo } from './component/Todo'
function App() {
  
 const [todos,setTodos] = useState({});
  fetch("http://localhost:3000/todos")
  .then(async function(res){
    const json = res.json();
    setTodos(json.todos);
  })
  
  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todo todos={[{
        title : "fbsd",
        description : "goto",
        completed : false
      }]}></Todo>
    </div>
  )
}

export default App
