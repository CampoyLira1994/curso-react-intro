import React from 'react';
import { TodoProvider } from '../src/TodoContext/index';
import { AppUI } from '../src/App/AppUI';

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;