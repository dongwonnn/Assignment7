import { Modal } from 'antd';
import { EXCEPTION_MODAL_TITLE } from './constants';

export const exceptionModal = (ERROR_MESSAGE: string) => {
  Modal.error({
    title: `${EXCEPTION_MODAL_TITLE}`,
    content: `${ERROR_MESSAGE}`,
  });
};
