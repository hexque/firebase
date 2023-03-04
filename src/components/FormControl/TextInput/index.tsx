/* eslint-disable @typescript-eslint/no-explicit-any */
// libraries
import React, { FC } from 'react';
// components
import { Input, Form } from 'antd';
import { Field, FormikErrors, FormikValues, FormikTouched } from 'formik';
// types
import { Core } from 'interfaces/core.interface';

interface TextInputProps extends Core {
  label?: string;
  placeholder?: string;
  hasFeedback?: boolean;
  error: FormikErrors<FormikValues> | any;
  touched: FormikTouched<FormikValues>;
  type?: 'Password' | 'Search' | 'TextArea';
  onChange?: (e: React.ChangeEvent<any>) => void;
  value?: string;
}

export const TextInput: FC<TextInputProps> = ({
  label,
  name,
  placeholder,
  error,
  hasFeedback = false,
  touched,
  type,
  onChange,
  value
}) => (
  <Form.Item
    hasFeedback={hasFeedback}
    help={touched[name] && error[name] ? error[name] : ''}
    validateStatus={touched[name] && error[name] ? 'error' : 'success'}>
    <Field
      as={type ? Input[type] : Input}
      label={label}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      touched={touched}
      value={value}
    />
  </Form.Item>
);
