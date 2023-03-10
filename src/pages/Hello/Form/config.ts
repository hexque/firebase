// libraries
import * as yup from 'yup';

interface initialValuesType extends Record<string, unknown> {
  email: string;
  password: string;
}

export const initialValues: initialValuesType = {
  email: '',
  password: ''
};

export const validationSchema = yup.object({
  email: yup.string().email('Incorrect email').required('Please, enter your email'),
  password: yup.string().required('Please, enter your password')
});
