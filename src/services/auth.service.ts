// libraries
import { createAsyncThunk } from '@reduxjs/toolkit';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { FormikValues } from 'formik';
// api
import { auth } from 'api/firebaseConfig';

class AuthService {
  static instance = new AuthService();

  public fetchAuth = createAsyncThunk('hello/fetchAuth', async (values: FormikValues) => {
    const { user } = await signInWithEmailAndPassword(auth, values.email, values.password);

    return user;
  });

  public fetchSignUp = createAsyncThunk('hello/fetchSignUp', async (values: FormikValues) => {
    const { user } = await createUserWithEmailAndPassword(auth, values.email, values.password);

    return user;
  });
}

export default AuthService.instance;
