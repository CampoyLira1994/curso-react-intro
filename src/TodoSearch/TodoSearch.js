import { TodoContext } from '../TodoContext';
import './TodoSearch.css';
import React from 'react';

function TodoSearch() {

    const [searchValue, setSate] = React.UseState('');

    return (
        <input placeholder="Search" className="TodoSearch" value={searchValue}
            onChange = {(event) => {
                console.log('TodoSearchConsole')
                console.log(event)
                console.log(event.target.value)
            }}
        />
    );
  }
  
  export { TodoSearch };