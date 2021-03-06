import React, { FC } from 'react';
import styled from 'styled-components';

interface TodoTemplateProps {
  children: JSX.Element[];
}

const TodoTemplate: FC<TodoTemplateProps> = ({ children }) => {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
};

export default React.memo(TodoTemplate);

const TodoTemplateBlock = styled.div`
  width: 70%;
  height: 100vh;

  min-width: 360px;
  max-width: 700px;

  position: relative;
  background: white;
  border-radius: 30px;
  box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.1);

  margin: 0 auto;

  display: flex;
  flex-direction: column;
`;
