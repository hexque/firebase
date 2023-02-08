/* eslint-disable @typescript-eslint/no-explicit-any */
// libraries
import React, { FC } from 'react';
// components
import { Input, Form } from 'antd';
import { Field, FormikErrors, FormikValues, FormikTouched } from 'formik';

type TextInputProps = {
  label?: string;
  name: string;
  placeholder?: string;
  hasFeedback?: boolean;
  errors: FormikErrors<FormikValues> | any;
  touched: FormikTouched<FormikValues>;
  type?: 'Password' | 'Search' | 'TextArea';
};

export const TextInput: FC<TextInputProps> = ({ label, name, placeholder, errors, hasFeedback = false, touched, type }) => (
  <Form.Item
    hasFeedback={hasFeedback}
    help={touched[name] && errors[name] ? errors[name] : ''}
    validateStatus={touched[name] && errors[name] ? 'error' : 'success'}>
    <Field
      as={type ? Input[type] : Input}
      label={label}
      name={name}
      placeholder={placeholder}
    />
  </Form.Item>
);