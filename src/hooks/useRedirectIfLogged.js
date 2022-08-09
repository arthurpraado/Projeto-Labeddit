import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToFeedPage } from "../routes/coordinator";

const useRedirectIfLogged = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.token !== undefined;
  useEffect(() => {
    if (isLoggedIn) {
      goToFeedPage(navigate);
    }
  }, []);
};

export default useRedirectIfLogged;
