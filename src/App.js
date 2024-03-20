
import './App.css';
import { TodoCounter } from './TodoCounter/TodoCount';
import { TodoButtonCreate } from './TodoButtonCreate/TodoButtonCreate';
import { TodoList } from './TodoList/TodoList';
import { TodoSearch } from './TodoSearch/TodoSearch';
import { TodoItem } from './TodoItem/TodoItem';
import React from 'react';


const defaultTodo = [
    { text: 'Test1', completed: true },
    { text: 'Test2', completed: false },
    { text: 'Test3', completed: false },
    { text: 'Test4', completed: false },
    { text: 'Test5', completed: true },
  ];

function App() {
  return (
    // eslint-disable-next-line react/jsx-no-undef
    <React.Fragment>

    <TodoCounter completed={16} total={25}/>
    <TodoSearch/>

    <TodoList>

{defaultTodo.map(todo => (
  <TodoItem 
  key={todo.text} 
  text={todo.text}
  completed={todo.completed}
  />
))}

    </TodoList>

    <TodoButtonCreate/>

    </React.Fragment>
  );
}



export default App;
