/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';

export type Itodo = {
  id: number;
  text: string;
  done: boolean;
  startDate: string;
  deadline: string;
};

export const useTodo = () => {
  const [todoState, setTodoState] = useState<Itodo[]>([]);
  const [nextIdState, setNextIdState] = useState(0);
  console.log(todoState);
  console.log(nextIdState);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    saveData();
  }, [todoState]);

  const incrementNextId = () => {
    setNextIdState(nextIdState + 1);
  };

  const toggleTodo = (id: number) => {
    setTodoState((prevState) =>
      prevState.map((todo: Itodo) =>
        todo.id === id
          ? {
              ...todo,
              done: !todo.done,
            }
          : todo,
      ),
    );
  };

  const removeTodo = (id: number) => {
    setTodoState((prevState) => prevState.filter((todo: Itodo) => todo.id !== id));
  };

  const createTodo = (todo: Itodo) => {
    setTodoState((prevState) =>
      prevState.concat({
        ...todo,
      }),
    );
  };

  const loadData = () => {
    let data = localStorage.getItem('todos') || '';
    let lastId = localStorage.getItem('lastId');

    setNextIdState(Number(lastId) + 1);
    setTodoState(JSON.parse(data));
  };

  const saveData = () => {
    let lastId = 0;
    if (todoState.length > 0) {
      lastId = todoState[todoState.length - 1].id;
    }

    localStorage.setItem('todos', JSON.stringify(todoState));
    localStorage.setItem('lastId', JSON.stringify(lastId));
  };

  return {
    todoState,
    nextIdState,
    incrementNextId,
    toggleTodo,
    removeTodo,
    createTodo,
  };
};
