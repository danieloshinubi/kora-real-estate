import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    id: "",
    email: "",
    password: "",
    roles: {
      User: "",
    },
    token: null,
    isVerified: false,
    accountDisabled: false,
  },
  reducers: {
    setCredentials: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.roles = action.payload.userType;
    },
    setAuthState: (state, action) => {
      state.token = action.payload.token;
      state.isVerified = action.payload.emailVerified;
      state.id = action.payload.id;
      state.roles = action.payload.userType;
    },
    logout: (state) => {
      state.email = "";
      state.password = "";
      state.token = null;
      state.roles = { User: "" };
    },
  },
});

export const { setCredentials, setAuthState, logout } = authSlice.actions;
export default authSlice.reducer;
