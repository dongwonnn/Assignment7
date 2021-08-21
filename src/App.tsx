import React from 'react';
import Spinner from 'components/common/Spinner';
import TodoContainer from 'components/todo/TodoContainer';
import 'antd/dist/antd.css';

function App() {
  const isLogged = true;

  return isLogged ? <TodoContainer /> : <Spinner mask />;
}

export default App;
