// libraries
import { FormikValues } from 'formik';
// components
import { Form } from 'components/Form';
import { LoginForm } from 'pages/Hello/Form';
// constants
import { initialValues, validationSchema } from 'pages/Hello/Form/config';
// hooks
import { useAppDispatch, useAppSelector } from 'hooks/hooks';
// features
import { authSelector } from 'features/auth.slice';
// services
import AuthService from 'services/auth.service';

const Hello: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector(authSelector);

  const handleLogin = (values: FormikValues) => {
    const { email, password } = values;

    dispatch(AuthService.fetchAuth({
      email, password
    }));
  };

  return (
    <Form
      extraParams={{
        isLoading
      }}
      formFieldsComponent={LoginForm}
      initialValues={initialValues}
      submit={handleLogin}
      validationSchema={validationSchema}
    />
  );
};

export default Hello;
