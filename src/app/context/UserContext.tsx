"use client";
import { createContext, useContext, useEffect, useState } from "react";

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

  return (
    <UserContext.Provider value={{ user, setUser, authToken }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
