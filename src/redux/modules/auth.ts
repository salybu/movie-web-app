import { createSlice, Dispatch } from '@reduxjs/toolkit';
import { AuthState, RootState } from 'types/types';
import { AUTH, Status } from 'utils/constants';
import { SignInService } from 'components/signin';
import { storage } from 'utils/storage';

const initialState: AuthState = {
  isLogin: null,
  status: Status.Idle,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    getAuthStart(state, action) {
      state.status = Status.Loading;
      state.error = null;
    },
    getAuthSuccess(state, action) {
      state.status = Status.Success;
      state.error = null;
      state.isLogin = action.payload;
    },
    getAuthFailure(state, action) {
      state.status = Status.Failure;
      state.error = action.payload;
    },
  },
});

export default authSlice.reducer;

export const { getAuthStart, getAuthSuccess, getAuthFailure } = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth;

// 비동기 메소드
export const getSignIn = async (dispatch: Dispatch, id: string, pw: string) => {
  try {
    dispatch(getAuthStart);
    const result = await SignInService.getSignIn(id, pw);
    dispatch(getAuthSuccess(result));
    storage.set(AUTH, result.toString());
  } catch {}
};

export const logOut = async (dispatch: Dispatch) => {
  try {
    dispatch(getAuthSuccess(false));
  } catch {}
};
