import {
  BaseQueryApi,
  FetchArgs,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import config from "./config";
import { refreshTokenRequest } from "./features/refresh";

const baseQuery = fetchBaseQuery({
  baseUrl: config.hostedURL,
  credentials: "include",
  prepareHeaders: (headers) => {
    return headers;
  },
});

const baseQueryWithReauth = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: {} = {} // Default to an empty object
) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 401) {
    // Send a request to refresh tokens
    const refreshResult = await refreshTokenRequest();

    if (refreshResult && refreshResult.accessToken) {
      // Retry the original query with the new access token
      result = await baseQuery(args, api, extraOptions);
    } else {
      // Handle token refresh failure
      await logout();
    }
  }
  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});

const logout = async () => {
  try {
    await fetch(`${config.baseURL}/auth/logout`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include", // Ensure cookies are sent with the request
    });
  } catch (error) {
    console.error("Error during logout:", error);
  }
};
