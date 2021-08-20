import React, { FC } from 'react';
import { Modal } from 'antd';

interface ExceptionModalProps {
  ERROR_MESSAGE: string;
}

const ExceptionModal: FC<ExceptionModalProps> = ({ ERROR_MESSAGE }) => {
  Modal.error({
    title: '예외 발생',
    content: `${ERROR_MESSAGE}`,
  });
  return <div></div>;
};

export default ExceptionModal;
