// libraries
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
// redux
import type { RootState, AppDispatch } from 'store/configureStore';

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
