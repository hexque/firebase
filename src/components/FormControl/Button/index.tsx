// libraries
import React, { FC } from 'react';
// components
import { Button as ButtonAntd } from 'antd';

type ButtonProps = {
  text: string;
  disabled?: boolean;
  className?: string;
  isLoading?: boolean;
  type: 'submit' | 'reset' | 'button';
};

export const Button: FC<ButtonProps> = ({ text, type, disabled, className, isLoading }) => (
  <ButtonAntd
    className={className}
    disabled={disabled}
    htmlType={type}
    loading={isLoading}>
    {text}
  </ButtonAntd>
);
