// libraries
import React from 'react';
// components
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined spin />;

export const Spinner: React.FC = () => <Spin indicator={antIcon} />;
