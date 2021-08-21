import React, { useCallback, useState } from 'react';
import { Itodo } from 'hooks/useTodo';
import { CheckOutlined, DeleteOutlined } from '@ant-design/icons';
import styled, { css } from 'styled-components';

interface TodoItemProps {
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  todo: Itodo;
}

const TodoItem = ({ toggleTodo, removeTodo, todo }: TodoItemProps) => {
  const { id, text, done, startDate, deadline } = todo;

  const handleCompleteToggle = useCallback((id) => {
    toggleTodo(id);
  }, []);

  const handleRemove = useCallback((id) => {
    removeTodo(id);
  }, []);

  return (
    <TodoItemBlock>
      <CheckCircle done={done} onClick={() => handleCompleteToggle(id)}>
        {done && <CheckOutlined />}
      </CheckCircle>
      <Text done={done}>{text}</Text>
      <DateText done={done}>
        {startDate} ~ {deadline}
      </DateText>
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
  justify-content: sp;
  align-items: center;
  padding: 12px 0;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }

  div:nth-child(3),
  div:nth-child(4) {
    font-size: 14px;
  }

  div:nth-child(2) {
    font-size: 16px;
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
  color: #119955;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
      text-decoration: line-through;
    `}
`;

const DateText = styled.div<{ done: boolean }>`
  padding: 0 20px;
  color: #119955;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
      text-decoration: line-through;
    `}
`;
