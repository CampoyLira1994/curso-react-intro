
import './App.css';
import { TodoCounter } from './TodoCounter/TodoCount';
import { TodoButtonCreate } from './TodoButtonCreate/TodoButtonCreate';
import { TodoList } from './TodoList/TodoList';
import { TodoSearch } from './TodoSearch/TodoSearch';
import { TodoItem } from './TodoItem/TodoItem';


function App() {
  return (
    <div className="App">

    <TodoCounter/>
    <TodoSearch/>

    <TodoList>

    <TodoItem/>
    <TodoItem/>
    <TodoItem/>

    </TodoList>

    <TodoButtonCreate/>

    </div>
  );
}



export default App;
