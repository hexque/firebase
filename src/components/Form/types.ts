/* eslint-disable @typescript-eslint/no-explicit-any */
// libraries
import { ElementType } from 'react';
import { FormikValues } from 'formik';

export type FormProps = {
  submit: (values: FormikValues) => void;
  initialValues: Record<string, unknown>;
  options?: Record<string, unknown>;
  validationSchema: any;
  formFieldsComponent: ElementType;
};