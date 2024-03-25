
import './App.css';
import { TodoCounter } from './TodoCounter/TodoCount';
import { TodoButtonCreate } from './TodoButtonCreate/TodoButtonCreate';
import { TodoList } from './TodoList/TodoList';
import { TodoSearch } from './TodoSearch/TodoSearch';
import { TodoItem } from './TodoItem/TodoItem';
import React from 'react';


const defaultTodos = [
    { text: 'Test1', completed: true },
    { text: 'Test2', completed: false },
    { text: 'Test3', completed: false },
    { text: 'Test4', completed: false },
    { text: 'Test5', completed: true },
  ];

function App() {

  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter( 
    (todo) => {

      const todoText = todo.text.toLocaleLowerCase();
      const searchText = searchValue.toLocaleLowerCase();

     return todoText.includes(searchText);
    }
  );

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text);
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text);
    newTodos.splice(todoIndex,1);
    setTodos(newTodos);
  };

  return (
    // eslint-disable-next-line react/jsx-no-undef
    <React.Fragment>

    <TodoCounter completed={completedTodos} total={totalTodos}/>
    <TodoSearch
        searchValue = {searchValue}
        setSearchValue={setSearchValue}
    />

    <TodoList>

{searchedTodos.map(todo => (
  <TodoItem 
  key={todo.text} 
  text={todo.text}
  completed={todo.completed}
  onComplete={() => completeTodo(todo.text)}
  onDelete={() => deleteTodo(todo.text)}
  />
))}

    </TodoList>

    <TodoButtonCreate/>

    </React.Fragment>
  );
}



export default App;
