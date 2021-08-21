import React, { ReactElement } from 'react';
import { SpinSize } from 'antd/lib/spin';
import { LoadingOutlined } from '@ant-design/icons';

interface ILoadingProps {
  size?: SpinSize;
  style?: React.CSSProperties;
}

export default function Loading(props: ILoadingProps): ReactElement {
  return <LoadingOutlined style={{ fontSize: props.size === 'large' ? 48 : 24, ...props.style }} spin />;
}
