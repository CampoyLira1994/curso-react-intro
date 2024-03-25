import './TodoSearch.css';
import React from 'react';

function TodoSearch() {

    const [searchValue, setSearchValue] = React.useState('');

    console.log('searchValue: ', searchValue);

    return (
        <input placeholder="Search" className="TodoSearch" value={searchValue}
            onChange = {(event) => {
                setSearchValue(event.target.value)
            }}
        />
    );
  }
  
  export { TodoSearch };