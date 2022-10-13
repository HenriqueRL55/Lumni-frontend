import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { SignInPage } from "./pages/sign-in/sign-in.component";
import { Dashboard } from "./pages/dashboard/dashboard.component";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<SignInPage />} />

                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
