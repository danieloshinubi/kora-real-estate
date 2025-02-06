"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { useGetProfileByIdQuery} from "../utils/services/api";
import { skipToken } from "@reduxjs/toolkit/query";

type User = {
  id: string;
  email: string;
  roles: string[];
} | null;

const UserContext = createContext<{
  user: User;
  setUser: (user: User) => void;
  authToken: string | null;
}>({
  user: null,
  setUser: () => {},
  authToken: null,
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>(null);
  const [authToken, setAuthToken] = useState<string | null>(null);

  const userId = user?.id;

  const {
    data: userProfile,
    error,
    refetch,
  } = useGetProfileByIdQuery(userId ? { userId } : skipToken);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("/api/get-user");
        if (res.ok) {
          const data = await res.json();
          setAuthToken(data.user.token);
        }
      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    };

    fetchUser();
  }, []);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, [setUser]);

  useEffect(() => {
    if (userId) {
      refetch();
    }
  }, [userId, refetch]);

  useEffect(() => {
    if (userProfile) {
      console.log(userProfile);
    }
    if (error) {
      console.log(error);
    }
  }, [userProfile, error]);

  return (
    <UserContext.Provider value={{ user, setUser, authToken }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
