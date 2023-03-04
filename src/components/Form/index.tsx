/* eslint-disable object-curly-newline */
/* eslint-disable @typescript-eslint/no-explicit-any */
// libraries
import React, { FC } from 'react';
import { Formik, Form as FormikForm } from 'formik';
// types
import { FormProps } from 'components/Form/interfaces';

export const Form: FC<FormProps> = ({
  submit,
  formFieldsComponent,
  initialValues,
  validationSchema,
  options,
  extraParams = {}
}) => {
  const FormFields = formFieldsComponent;

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      onSubmit={submit}
      validationSchema={validationSchema}>
      {(props: any) => (
        <FormikForm noValidate>
          <FormFields
            {...props}
            {...extraParams}
            options={options}
          />
        </FormikForm>
      )}
    </Formik>
  );
};
