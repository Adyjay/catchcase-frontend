import React, { useState } from "react";
import { loginAdmin } from "../services/apis";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }

    setLoading(true);
    try {
      const result = await loginAdmin(email, password);
      console.log("resutl is ", result);
      if (!result?.token) throw new Error("Invalid login response.");
      localStorage.setItem("adminToken", result.token);

      localStorage.setItem("adminName", result?.data?.name);
      localStorage.setItem("adminEmail", result?.data?.email);
    //   localStorage.setItem("adminPhoto", result?.data?.name);
      // alert("Login successful!");
      
      window.location.href = "/dashboard";
    } catch (err: any) {
      console.error("Login error:", err);
      setError(err.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <form
        onSubmit={handleLogin}
        className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-full max-w-sm space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-indigo-700">Admin Login</h2>

        {error && (
          <div className="text-red-600 bg-red-100 border border-red-300 px-4 py-2 rounded text-sm">
            {error}
          </div>
        )}

        <div>
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
