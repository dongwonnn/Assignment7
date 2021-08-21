import React from 'react';
import TodoItem from './item/TodoItem';
import { Itodo } from 'hooks/useTodo';
import styled from 'styled-components';

interface TodoListProps {
  todos: Itodo[];
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

const TodoList = ({ toggleTodo, removeTodo, todos }: TodoListProps) => {
  return (
    <TodoListBlock>
      {todos.map((todo) => (
        <TodoItem toggleTodo={toggleTodo} removeTodo={removeTodo} key={todo.id} todo={todo} />
      ))}
    </TodoListBlock>
  );
};

export default React.memo(TodoList);

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;
