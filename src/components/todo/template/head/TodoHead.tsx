import React, { useEffect, useState } from 'react';
import { DATE_FORM, TIME_FORM } from 'utils/constants';
import styled from 'styled-components';

const TodoHead = () => {
  const [date] = useState(new Date().toLocaleDateString('en-US', DATE_FORM));
  const [time, setTime] = useState(new Date().toLocaleTimeString('en-US', TIME_FORM));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-US', TIME_FORM));
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <TodoHeadBlock>
      <p>{date}</p>
      <p>{time}</p>
    </TodoHeadBlock>
  );
};

export default React.memo(TodoHead);

const TodoHeadBlock = styled.div`
  padding-top: 52px;
  border-bottom: 3px solid #33bb77;

  p {
    text-align: center;
    color: #119955;
    padding-top: 5px;
  }

  p:first-child {
    font-size: 22px;
  }
  p:last-child {
    font-size: 26px;
  }
`;
