import { CheckOutlined, DeleteOutlined } from '@ant-design/icons';
import { Itodo } from 'components/todo/TodoService';
import React, { useCallback, useState } from 'react';
import styled, { css } from 'styled-components';

interface TodoItemProps {
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  todo: Itodo;
}

const TodoItem = ({ toggleTodo, removeTodo, todo }: TodoItemProps) => {
  const { id, text, done, startDate, deadline } = todo;
  const handleToggle = useCallback((id) => {
    toggleTodo(id);
  }, []);

  const handleRemove = useCallback((id) => {
    removeTodo(id);
  }, []);

  return (
    <TodoItemBlock>
      <CheckCircle done={done} onClick={() => handleToggle(id)}>
        {done && <CheckOutlined />}
      </CheckCircle>
      <Text done={done}>{id}</Text>
      <Text done={done}>{text}</Text>
      <Text done={done}>시작일: {startDate}</Text>
      <Text done={done}>마감일: {deadline}</Text>
      <Remove onClick={() => handleRemove(id)}>
        <DeleteOutlined />
      </Remove>
    </TodoItemBlock>
  );
};

export default React.memo(TodoItem);

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #119955;
  font-size: 16px;
  cursor: pointer;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div<{ done: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 16px;
  border: 1px solid #33bb77;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      border: 1px solid #dddddd;
      color: #dddddd;
    `}
`;

const Text = styled.div<{ done: boolean }>`
  flex: 1;
  font-size: 16px;
  color: #119955;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
      text-decoration: line-through;
    `}
`;
