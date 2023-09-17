import { redirect } from "react-router-dom";

export default function ProtectedRoutes({ children }) {
  const isLoggedIn = localStorage.getItem("user:token") !== null || true;
  if (!isLoggedIn) {
    redirect("/users/sign_in");
  } else if (
    isLoggedIn &&
    ["/users/sign_in", "users/sign_up"].includes(window.location.pathname)
  ) {
    redirect("/");
  }

  return children;
}
