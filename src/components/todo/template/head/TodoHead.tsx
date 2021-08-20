import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { DATE_FORM, TIME_FORM } from 'utils/constants';

const TodoHeadBlock = styled.div`
  padding-top: 52px;
  padding-bottom: 24px;
  border-bottom: 3px solid #33bb77;

  p {
    text-align: center;
    font-size: 22px;
    color: #119955;
    padding-top: 5px;
  }
`;

// const TodoHeadBlock = styled.div`
//   display: flex;
//   justify-content: center;
//   padding-top: 52px;
//   padding-bottom: 24px;
//   border-bottom: 3px solid #33bb77;
// `;

// const DateText = styled.div`
//   font-size: 26px;
//   color: #119955;
//   padding-left: 10px;
// `;

// const DayText = styled.div`
//   font-size: 22px;
//   color: #119955;
//   padding-top: 5px;
// `;

const TodoHead = () => {
  //@TODO 현재 시간을 표시해야합니다.
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
