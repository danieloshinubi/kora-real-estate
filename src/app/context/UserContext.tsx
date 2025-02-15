"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { UserProfileInfo } from "../ui/signUp/SignUpForm";

type User = {
  id: string;
  email: string;
  roles: string[];
} | null;

const UserContext = createContext<{
  user: User;
  setUser: (user: User) => void;
  authToken: string | null;
  userProfileData: UserProfileInfo | null;
}>({
  user: null,
  setUser: () => {},
  authToken: null,
  userProfileData: null,
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>(null);
  const [userId, setUserId] = useState<string>("");
  const [authToken, setAuthToken] = useState<string | null>(null);
  const [userProfileData, setUserProfileData] =
    useState<UserProfileInfo | null>(null);

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
      setUserId(JSON.parse(storedUser)._id);
    }
  }, [setUser]);

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (userId) {
        try {
          const res = await fetch(
            `https://kora-service.onrender.com/profile/${userId}`,
            {
              method: "GET",
            }
          );

          if (res.ok) {
            const profileData = await res.json();
            setUserProfileData(profileData?.profile);
          } else {
            console.error("Failed to fetch user profile:", res.statusText);
          }
        } catch (error) {
          console.error("Error fetching user profile:", error);
        }
      } else {
        console.log("No user id found");
      }
    };

    fetchUserProfile();
  }, [userId, authToken]);

  return (
    <UserContext.Provider value={{ user, setUser, authToken, userProfileData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
