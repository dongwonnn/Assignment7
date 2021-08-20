import React, { useState } from 'react';
import styled from 'styled-components';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Itodo } from 'components/todo/TodoService';
import { INPUT_ERROR_MESSAGE } from 'utils/constants';
import { Modal, DatePicker } from 'antd';
const { RangePicker } = DatePicker;

interface TodoCreateProps {
  nextId: number;
  createTodo: (todo: Itodo) => void;
  incrementNextId: () => void;
}

const TodoCreate = ({ nextId, createTodo, incrementNextId }: TodoCreateProps) => {
  const [value, setValue] = useState('');
  const [startDate, setStartDate] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleDateChange = (_: any, dateStrings: [string, string]) => {
    const [start, end] = dateStrings;
    setStartDate(start);
    setDeadline(end);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!value) {
      Modal.error({
        title: '예외 발생',
        content: `${INPUT_ERROR_MESSAGE}`,
      });

      return;
    }

    if (!startDate || !deadline) {
      Modal.error({
        title: '예외 발생',
        content: `시작 일과, 완료 목표일을 등록해주세요.`,
      });

      return;
    }

    createTodo({
      id: nextId,
      text: value,
      done: false,
      startDate,
      deadline,
    });
    incrementNextId(); // nextId 하나 증가

    setValue(''); // input 초기화
  };

  return (
    <>
      <InsertFormPositioner>
        <InsertForm onSubmit={handleSubmit}>
          <Input autoFocus placeholder="What's need to be done?" onChange={handleChange} value={value} />
          <CircleButton>
            <PlusCircleOutlined />
          </CircleButton>
        </InsertForm>
        <RangePicker onChange={handleDateChange} />
      </InsertFormPositioner>
    </>
  );
};

export default React.memo(TodoCreate);

const CircleButton = styled.button`
  background: #33bb77;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  left: 50%;
  transform: translate(50%, 0%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  border-bottom: 1px solid #eeeeee;
  background: #eeeeee;
`;

const InsertForm = styled.form`
  display: flex;
  padding-left: 40px;
  padding-top: 36px;
  padding-right: 60px;
  padding-bottom: 36px;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #dddddd;
  width: 100%;
  outline: none;
  font-size: 21px;
  box-sizing: border-box;
  color: #119955;
  &::placeholder {
    color: #dddddd;
    font-size: 16px;
  }
`;
