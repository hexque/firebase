// libraries
import { FormikValues } from 'formik';
// components
import { Form } from 'components/Form';
import { SignUpForm } from 'pages/SignUp/Form';
// hooks
import { useAppDispatch } from 'hooks/hooks';
// constants
import { initialValues, validationSchema } from 'pages/SignUp/Form/config';
// services
import AuthService from 'services/auth.service';

const SignUp: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleSignUp = (values: FormikValues) => {
    const { email, password } = values;

    dispatch(AuthService.fetchSignUp({
      email, password
    }));
  };

  return (
    <Form
      formFieldsComponent={SignUpForm}
      initialValues={initialValues}
      submit={handleSignUp}
      validationSchema={validationSchema}
    />
  );
};

export default SignUp;
