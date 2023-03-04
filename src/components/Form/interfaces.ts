/* eslint-disable @typescript-eslint/no-explicit-any */
// libraries
import { ElementType } from 'react';
import { FormikValues } from 'formik';

export interface FormProps {
  submit: (values: FormikValues) => void;
  initialValues: Record<string, unknown>;
  options?: Record<string, unknown>;
  validationSchema: any;
  formFieldsComponent: ElementType;
  extraParams?: Record<string, unknown>;
}
