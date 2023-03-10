// libraries
import React, { FC } from 'react';
import { FormikProps, FormikValues } from 'formik';
// components
import { TextInput } from 'components/FormControl/TextInput';
import { Button } from 'components/FormControl/Button';
// types
import { ExtraParams } from 'interfaces/core.interface';

export const LoginForm: FC<ExtraParams & FormikProps<FormikValues>> = ({ isLoading, ...props }) => (
  <div>
    <TextInput
      {...props}
      error={props.errors}
      label="Email"
      name="email"
      onChange={props.handleChange}
      touched={props.touched}
    />
    <TextInput
      {...props}
      error={props.errors}
      label="Password"
      name="password"
      onChange={props.handleChange}
      touched={props.touched}
      type="Password"
    />
    <Button isLoading={isLoading} name="button" text="Log in" type="submit" />
  </div>
);
