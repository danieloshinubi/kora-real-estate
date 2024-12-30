import { apiSlice } from "../../apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (userData) => ({
        url: "auth/user/signup",
        method: "POST",
        body: userData,
      }),
    }),
    login: builder.mutation({
      query: (loginData) => ({
        url: "auth/user/login",
        method: "POST",
        body: loginData,
      }),
    }),
  }),
  overrideExisting: true,
});

export const { useSignUpMutation, useLoginMutation } = authApiSlice;
