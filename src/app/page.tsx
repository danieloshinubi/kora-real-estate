"use client"
import { useUser } from "./context/UserContext";

export default function Home() {
  const { user } = useUser();

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Welcome, {user.id}!</h1>
      <p>Your email: {user.email}</p>
    </div>
  );
}
