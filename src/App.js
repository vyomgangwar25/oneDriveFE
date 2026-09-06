import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/pages/login'
import Signup from './components/pages/signup';
import Dashboard from './components/pages/dashboard';
import { AuthProvider } from "./context/AuthContext";

function App() {
    return (
        <AuthProvider>
        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>

        </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
