"use client";
import React, { useEffect, useState } from "react";
import { useUser } from "@/app/context/UserContext";
import { useRouter, usePathname } from "next/navigation";

const withAuth = (WrappedComponent: React.ComponentType) => {
  const AuthComponent: React.FC = (props) => {
    const { user } = useUser();
    const router = useRouter();
    const pathName = usePathname();
    const [isMounted, setIsMounted] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Set isMounted to true after the component mounts.
    useEffect(() => {
      setIsMounted(true);
    }, []);

    // Once mounted, check for authentication.
    useEffect(() => {
      if (isMounted) {
        if (user) {
          setIsAuthenticated(true);
        } else {
          // Redirect to sign-up with the current path as a query parameter.
          router.replace(`/sign-up?redirect=${encodeURIComponent(pathName as string)}`);
        }
      }
    }, [isMounted, user, router, pathName]);

    // Optionally, render a loading spinner or nothing until everything is ready.
    if (!isMounted || !isAuthenticated) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  return AuthComponent;
};

export default withAuth;
