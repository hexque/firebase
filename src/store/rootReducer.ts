// libraries
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createBlacklistFilter } from 'redux-persist-transform-filter';
// reducers
import authReducer from 'features/auth.slice';

const authBlackListedFields = createBlacklistFilter('auth', ['isLoading']);

const persistConfig = {
  key: 'root',
  storage,
  whiteList: ['auth'],
  transforms: [authBlackListedFields]
};

const rootReducer = combineReducers({
  auth: authReducer
});

export default persistReducer(persistConfig, rootReducer);
