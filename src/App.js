import {selectTodoList} from './features/todoSlice'
import './App.css';
import Input from './componenets/Input';
import TodoItem from './componenets/TodoItem';
import { useSelector } from 'react-redux';
function App() {
  const todoList=useSelector(selectTodoList)
  return (
    <div className="App">
      <div className='app_container'>
        <div className='aap_todocontainer'>
           {
            todoList.map( item =>(
            <TodoItem name={item.item}
            done={item.done} id={item.id}/>
            ))
           }
        </div>
      <Input/>
      </div>
    </div>
  );
}

export default App;
