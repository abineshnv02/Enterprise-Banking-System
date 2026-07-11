import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import Ledger from "./pages/Ledger";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";

import Register from "./pages/Register";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route

                path="/"

                element={<Home/>}

                />

                <Route

                path="/dashboard"

                element={

                <ProtectedRoute>

                <Dashboard/>

                </ProtectedRoute>

                }

                />

        <Route
    path="/customers"
    element={
        <ProtectedRoute>
            <Customers />
        </ProtectedRoute>
    }
/>

        <Route
    path="/ledger"
    element={
        <ProtectedRoute>
            <Ledger />
        </ProtectedRoute>
    }
/>

        <Route
    path="/reports"
    element={
        <ProtectedRoute>
            <Reports />
        </ProtectedRoute>
    }
/>

       <Route
    path="/settings"
    element={
        <ProtectedRoute>
            <Settings />
        </ProtectedRoute>
    }
/>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

      </Routes>

      <Footer />

      <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
        />
    </>
  );
}

export default App;