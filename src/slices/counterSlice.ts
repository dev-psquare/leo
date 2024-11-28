import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { AsyncThunkConfig } from "@reduxjs/toolkit/dist/createAsyncThunk"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL } from '../../constant';
export interface CounterState {
  isLogin: boolean;
  user: user| null
}
export interface user {
  _id: string;
  name: string;
  email: string;
  profile?:string
}

const initialState: CounterState = {
  isLogin: false,
  user: null
}

export const LoginByNumber = createAsyncThunk<void, { employeeId: string, password: string }, AsyncThunkConfig>(
  'LoginByNumber',
  async (body) => {
    try {
      const response = await fetch(`${API_URL}/app/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      if (!data.success) {
        throw new Error(`${data.message}`);

      }
      return data;
    } catch (error) {
      const a = {
        success: false,
        message: (error as { message: string }).message
      }
      return a;
    }
  }
);
export const TokenLogin = createAsyncThunk<void, { token: string }, AsyncThunkConfig>(
  'TokenLogin',
  async (body) => {
    try {
      const response = await fetch(`${API_URL}/app/token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      if (!data.success) {
        throw new Error(`${data.message}`);

      }
      return data;
    } catch (error) {
      const a = {
        success: false,
        message: (error as { message: string }).message
      }
      return a;
    }
  }
);
export const LoginOtpVerify = createAsyncThunk<void, { credential: string, otp: string }, AsyncThunkConfig>(
  'LoginOtpVerify',
  async (body) => {
    try {
      const response = await fetch(`${API_URL}/app/loginOtpVerify`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      if (!data.success) {
        throw new Error(`${data.message}`);

      }
      return data;
    } catch (error) {
      const a = {
        success: false,
        message: (error as { message: string }).message
      }
      return a;
    }
  }
);
export const LoginWithNumber = createAsyncThunk<void, { id: string }, AsyncThunkConfig>(
  'LoginWithNumber',
  async (body) => {
    try {
      const response = await fetch(`${API_URL}/app/loginWithOtp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      if (!data.success) {
        throw new Error(`${data.message}`);

      }
      return data;
    } catch (error) {
      const a = {
        success: false,
        message: (error as { message: string }).message
      }
      return a;
    }
  }
);
export const ForgotPasswordOtp = createAsyncThunk<void, { credential: string }, AsyncThunkConfig>(
  'ForgotPasswordOtp',
  async (body) => {
    try {
      const response = await fetch(`${API_URL}/app/forgotPassword`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      if (!data.success) {
        throw new Error(`${data.message}`);

      }
      return data;
    } catch (error) {
      const a = {
        success: false,
        message: (error as { message: string }).message
      }
      return a;
    }
  }
);
export const ForgotOtpVerification = createAsyncThunk<void, { credential: string, otp: string }, AsyncThunkConfig>(
  'ForgotOtpVerification',
  async (body) => {
    try {
      const response = await fetch(`${API_URL}/app/forgotPasswordVerify`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      if (!data.success) {
        throw new Error(`${data.message}`);

      }
      return data;
    } catch (error) {
      const a = {
        success: false,
        message: (error as { message: string }).message
      }
      return a;
    }
  }
);
export const ResetPassword = createAsyncThunk<void, { token: string, newPassword: string }, AsyncThunkConfig>(
  'ResetPassword',
  async (body) => {
    try {
      const response = await fetch(`${API_URL}/app/resetPassword`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      if (!data.success) {
        throw new Error(`${data.message}`);

      }
      return data;
    } catch (error) {
      const a = {
        success: false,
        message: (error as { message: string }).message
      }
      return a;
    }
  }
);
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    logout: (state) => {
      state.isLogin = false
    },
    login: (state, { payload }) => {
      state.user = (payload as { management: user }).management
    }
  },
  extraReducers(builder) {
    builder
      .addCase(LoginByNumber.fulfilled, (state, { payload }) => {
        interface LoginPayload {
          success: boolean;
          management: user;
          token: string;
        }
        const typedPayload = payload as unknown as LoginPayload;
        if (typedPayload?.success) {
          state.isLogin = true
          state.user = (typedPayload as { management: user }).management
          storeData("token", (typedPayload as { token: string }).token)
          const a = JSON.stringify((typedPayload as { management: user }).management)
          storeData("user", a)
        }
      })
      .addCase(TokenLogin.fulfilled, (state, { payload }) => {
        interface LoginPayload {
          success: boolean;
          management: user;
        }
        const typedPayload = payload as unknown as LoginPayload;
        if (typedPayload?.success) {
          state.isLogin = true
          state.user = (typedPayload as { management: user }).management
          const a = JSON.stringify((typedPayload as { management: user }).management)
          storeData("user", a)
        }
      })
  },
})
export const storeData = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.error(e)
  }
};
export const getData = async (key: string, type: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (type === "string") {
      return value
    }
    else if (type === "object" && value !== null) {
      return JSON.parse(value)
    }
    return value
  } catch (e) {
    console.error(e)
  }
};
export const { logout, login } = counterSlice.actions
export default counterSlice.reducer