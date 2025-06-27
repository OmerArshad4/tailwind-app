import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Toaster from "../Shared/Toaster";

export function PrivateRoute({ Component, props, role }) {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    // if (!user) {
    //   navigate("/signIn");
    // } else if (user) {
    //   user.role !== role && navigate("/");
    // }
  }, [navigate, user]);

  return <Component {...props} />;
}
