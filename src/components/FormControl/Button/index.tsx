// libraries
import React, { FC } from 'react';
// components
import { Button as ButtonAntd } from 'antd';
import { Spinner } from 'components/Spinner';
// types
import { Core } from 'interfaces/core.interface';

interface ButtonProps extends Core {
  text: string;
  isLoading?: boolean;
  type: 'submit' | 'reset' | 'button';
}

export const Button: FC<ButtonProps> = ({ text, type, disabled, className, isLoading }) => (
  <ButtonAntd
    className={className}
    disabled={disabled}
    htmlType={type}>
    {text}
    {isLoading ? <Spinner /> : null}
  </ButtonAntd>
);
