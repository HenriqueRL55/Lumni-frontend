import React, {createContext, useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import api from "../services/api";

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


  const login = async (email, password) => {
    console.log(email, password);

    const response =  await api.post("/login", {email, password})
    console.log(response);

    const user = response.data.user;
    const token = response.data.token

    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);

    api.defaults.headers.Authorization = `Bearer ${token}`;
    setUser(user);
    navigate("/dashboard");
  };

  const logout = () => {
    
    console.log("logout");
    setUser(null);
    api.defaults.headers.Authorization = null;
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/");
  }

  return (
    <AuthContext.Provider value={{authenticated:!!user, user, loading, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
}