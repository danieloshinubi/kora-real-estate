import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Listing } from "@/types/listingtype";
import { UserDetails, UserProfileInfo } from "@/app/ui/signUp/SignUpForm";
export type FetchedPropertyType = {
  name: string;
  _id: string;
};

export type UserFavorite = {
  data: {
    user: string;
    listing: string[];
  };
};

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://kora-service.onrender.com" }),
  endpoints: (builder) => ({
    // Auth Endpoints
    signUp: builder.mutation<
      { user: UserDetails; message: string },
      { email: string; password: string; phoneNo: string }
    >({
      query: (newUser) => ({
        url: "/auth/user/signup",
        method: "POST",
        body: newUser,
      }),
    }),

    login: builder.mutation<
      {
        message: string;
        accessToken: string;
        user: {
          id: string;
          email: string;
          phoneNo: string;
          roles: {
            User: string;
          };
          isVerified: boolean;
          accountDisabled: boolean;
        };
      },
      { email: string; password: string }
    >({
      query: (credentials) => ({
        url: "/auth/user/login",
        method: "POST",
        body: credentials,
      }),
    }),

    logout: builder.mutation<{ message: string }, void>({
      query: () => "/auth/user/logout",
    }),

    verifyAccount: builder.query<{ message: string }, { token: string }>({
      query: ({ token }) => `/auth/user/verify-account/${token}`,
    }),

    forgotPassword: builder.mutation<{ message: string }, { email: string }>({
      query: (data) => ({
        url: "/auth/user/forgotpassword",
        method: "POST",
        body: data,
      }),
    }),

    resetPassword: builder.mutation<
      { message: string },
      { email: string; otp: string; newPassword: string }
    >({
      query: (data) => ({
        url: "/auth/user/resetpassword",
        method: "POST",
        body: data,
      }),
    }),

    changePassword: builder.mutation<
      { message: string },
      {
        userId: string;
        currentPassword: string;
        newPassword: string;
      }
    >({
      query: (data) => ({
        url: "/auth/user/changepassword",
        method: "PATCH",
        body: data,
      }),
    }),

    // Profile Endpoints
    createProfile: builder.mutation<{ message: string }, UserProfileInfo>({
      query: (profile) => ({
        url: "/profile",
        method: "POST",
        body: profile,
      }),
    }),

    getProfileById: builder.query<{ profile: JSON }, { userId: string }>({
      query: ({ userId }) => `/profile/${userId}`,
    }),

    // PropertyType Endpoints
    getPropertyTypes: builder.query<FetchedPropertyType[], void>({
      query: () => "/property-types",
    }),

    createPropertyType: builder.mutation<{ message: string }, { name: string }>(
      {
        query: (propertyType) => ({
          url: "/property-types",
          method: "POST",
          body: propertyType,
        }),
      }
    ),

    deletePropertyType: builder.mutation<{ message: string }, { id: string }>({
      query: ({ id }) => ({
        url: `/property-types/${id}`,
        method: "DELETE",
      }),
    }),

    //Listing Endpoints
    getListings: builder.query<Listing[], void>({
      query: () => "/listings",
    }),

    //Favorites endpoints
    getFavorites: builder.query<
      { favorites: UserFavorite },
      { userId: string }
    >({
      query: ({ userId }) => `/favorites/${userId}`,
    }),

    addFavorite: builder.mutation<
      { message: string },
      { userId: string; listingId: string }
    >({
      query: (favorite) => ({
        url: "/favorites",
        method: "POST",
        body: favorite,
      }),
    }),

    removeFavorites: builder.mutation<
      { message: string },
      { userId: string; listingId: string }
    >({
      query: (favorite) => ({
        url: "/favorites",
        method: "POST",
        body: favorite,
      }),
    }),

    //Transaction Endpoints
    createTransaction: builder.mutation<
      { message: string },
      { userId: string; listingId: string; amount: number }
    >({
      query: (transaction) => ({
        url: "/transaction",
        method: "POST",
        body: transaction,
      }),
    }),

    getTransaction: builder.query<
      { transaction: JSON },
      { userId: string; listingId: string }
    >({
      query: ({ userId, listingId }) => `/transaction/${userId}/${listingId}`,
    }),
  }),
});

export const {
  useSignUpMutation,
  useLoginMutation,
  useLogoutMutation,
  useVerifyAccountQuery,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useCreateProfileMutation,
  useGetProfileByIdQuery,
  useGetPropertyTypesQuery,
  useCreatePropertyTypeMutation,
  useDeletePropertyTypeMutation,
  useGetListingsQuery,
  useGetFavoritesQuery,
  useAddFavoriteMutation,
  useRemoveFavoritesMutation,
  useCreateTransactionMutation,
  useGetTransactionQuery,
} = api;
