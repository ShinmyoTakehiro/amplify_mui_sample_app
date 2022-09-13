import React,{useState} from 'react';
import TodoList from './components/TodoList'
import NewTodo from './components/NewTodo'
import { todo } from './todo.model'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar'
// function App() {
//   return (
//     <div className="App">
//     </div>
//   );
// }
const App: React.FC = () => {
    // const todos = [{ id:'t1',text:'typescriptコースサンプルS'}]
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(true);
  console.log({isSidebarOpen});
  console.log({setSidebarOpen});
  //   const [todos,setTodos] = useState<todo[]>([])
  const todoAddHandler = (text: string) => {
    // setTodos(prevTodo=>[...prevTodo,{id:Math.random().toString(),text:text}])
  console.log({text});
  
  }
  const todoDeleteHandler = (todoId: string)=>{
    // setTodos(prevTodo =>prevTodo.filter(todo=>todo.id !== todoId))
  }
  return <div className="App">
    <Navbar
      open={() => { setSidebarOpen(true); console.log({isSidebarOpen})}}
    />
    <Sidebar
      close={() => { setSidebarOpen(false); console.log({ isSidebarOpen }) }}
      openFlg={isSidebarOpen}
    />
    {/* <NewTodo onAddTodo={todoAddHandler } /> */}
    {/* <TodoList todoItems={todos} onDeleteTodo={todoDeleteHandler } /> */}
  </div>
}
export default App;
