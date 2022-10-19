import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { SignInPage } from "./pages/sign-in/sign-in.component";
import { Dashboard } from "./pages/dashboard/dashboard.component";
import { Questions } from "./pages/questions/questions.component";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<SignInPage />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/questions" element={<Questions />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
