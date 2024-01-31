import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [services, setServices] = useState("");

  //storing token in local storage
  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };

  
  let isLoggedIn = !!token;

  //tackling the logout functionality
  const LogoutUser = () => {
    // eslint-disable-next-line no-restricted-globals
    let logout = confirm("Confirm logout!");
    if (logout) {
      setToken("");
      localStorage.removeItem("token");
    }
  };
  

  //JWT authentication- to get the currently loggedIn user data
  const userAuthentication = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data.userData);
      }
    } catch (error) {
      console.log("Error fetching user data");
    }
  };

  //getting data from services section
  const getServices = async (bookName) => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${bookName}&key=AIzaSyB-Av6TJI6fhwzg420_O-uUa-m1N5e2j8w`,
        {
          method: "GET",
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data.msg);
        setServices(data.msg);
      }
    } catch (error) {
      console.log("Error fetching services data");
    }
  };

  useEffect(() => {
    getServices();
    userAuthentication();
  }, []);

  return (
    <AuthContext.Provider
      value={{ storeTokenInLS, isLoggedIn, LogoutUser, user, services }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};
