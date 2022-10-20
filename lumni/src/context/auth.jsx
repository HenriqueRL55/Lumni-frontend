import React, {createContext, useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storageUser = localStorage.getItem("user");
    if (storageUser) {
      setUser(JSON.parse(storageUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    console.log("cu" + email, password);

    //pega o token da api


    const logado = { 
      email: email,
      token: "123456789"
    }
    localStorage.setItem("user", JSON.stringify(logado));

    if (email === "admin" && password === "admin") {
      setUser({logado});
      navigate("/dashboard");
    }
  };

  const logout = () => {
    console.log("logout");
    setUser(null);
    localStorage.removeItem("user");
    navigate("/");
  }

  return (
    <AuthContext.Provider value={{authenticated:!!user, user, loading, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
}