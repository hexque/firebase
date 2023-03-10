// libraries
import React, { FC } from 'react';
import { FormikProps, FormikValues } from 'formik';
// components
import { TextInput } from 'components/FormControl/TextInput';
import { Button } from 'components/FormControl/Button';

export const SignUpForm: FC<FormikProps<FormikValues>> = ({ ...props }) => (
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
    <Button name="button" text="Sign up" type="submit" />
  </div>
);
