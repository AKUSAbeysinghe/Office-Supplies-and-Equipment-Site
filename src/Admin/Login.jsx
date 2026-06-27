import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("http://localhost/officestuff_db/api/login.php", {  // Updated endpoint
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setMessage("✅ Login successful! Redirecting...");

        localStorage.setItem("user", JSON.stringify(data.user));

        setTimeout(() => {
          navigate("/admin");
        }, 1200);
      } else {
        setMessage("❌ " + (data.message || "Invalid credentials"));
      }
    } catch (err) {
      setMessage("❌ Something went wrong! Make sure XAMPP is running.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fdfaf6]">
      <div className="bg-white p-10 md:p-12 rounded-3xl shadow-xl w-full max-w-md border border-gray-100">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
          <p className="text-gray-600 mt-2">Sign in to access admin panel</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-[#8bb174] transition"
              required
            />
          </div>

          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-[#8bb174] transition"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#0F172A] hover:bg-slate-800 text-white py-4 rounded-2xl font-semibold transition-all duration-300 disabled:opacity-70 shadow-md"
          >
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>

        {message && (
          <p className={`text-center mt-6 text-sm font-medium ${message.includes("✅") ? "text-green-600" : "text-red-600"}`}>
            {message}
          </p>
        )}

        <p className="text-center mt-8 text-sm text-gray-600">
          Don't have an account?{" "}
          <a href="/signup" className="text-[#8bb174] hover:underline font-medium">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;