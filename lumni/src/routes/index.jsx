import React, { useState, useContext } from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import { SignInPage } from "../pages/sign-in/sign-in.component";
import { Dashboard } from "../pages/dashboard/dashboard.component";
import { Questions } from "../pages/questions/questions.component";
import { Quiz } from "../pages/quiz/quiz.component";
import { Filter } from "../pages/filterQuiz/filterQuiz.component";
import { Users } from "../pages/users/users.component";
import { AuthProvider, AuthContext } from "../context/auth";
import { RegisterPage } from "../pages/register/register.component";

const RoutesFunction = () => {
    const Private = ({ children }) => {
        const { authenticated, loading } = useContext(AuthContext);

        if (loading) {
            return <div>Carregando...</div>;
        }

        return authenticated ? children : <Navigate to="/" />;
    };

    return (
        <AuthProvider>
            <Routes>
                <Route path="/" element={<SignInPage />} />
                <Route path="/register" element={<RegisterPage />} />

                <Route
                    path="/dashboard"
                    element={
                        <Private>
                            <Dashboard />
                        </Private>
                    }
                />

                <Route
                    path="/questions"
                    element={
                        <Private>
                            <Questions />
                        </Private>
                    }
                />

                <Route
                    path="/users"
                    element={
                        <Private>
                            <Users />
                        </Private>
                    }
                />

                <Route
                    path="/quiz"
                    element={
                        <Private>
                            <Quiz />
                        </Private>
                    }
                />

                <Route
                    path="/filter"
                    element={
                        <Private>
                            <Filter />
                        </Private>
                    }
                />
            </Routes>
        </AuthProvider>
    );
};

export default RoutesFunction;
