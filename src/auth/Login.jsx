import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = formData;

    if (!email || !password) {
      setMessage("Please fill all fields!");
      return;
    }

    try {
      const res = await fetch(
        "https://eeriest-asymptotically-sherie.ngrok-free.dev/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.message || "Login failed");
        return;
      }


      localStorage.setItem("token", data.token);

      localStorage.setItem("userData", JSON.stringify({
        id: data.id,
        email: data.email,
        phone: data.phone,
        city: data.city,
      }));

      if (data.role_name === "customer") {
        navigate("/customer");
      } else {
        navigate("/provider");
      }

    } catch (error) {
      console.error(error);
      setMessage("Something went wrong, try again");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center w-full">
      <div className="max-w-md rounded-lg shadow-lg p-8 w-full bg-brand-surface border border-brand-primary/10">
        <h1 className="text-2xl font-bold text-center mb-6">
          Sign in to your account
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2"
              placeholder="name@company.com"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2"
              placeholder="••••••••"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-1/2 text-white rounded-lg py-2 bg-brand-dark"
            >
              Sign in
            </button>
          </div>

          {message && (
            <p className="text-center text-red-500 mt-2">{message}</p>
          )}
        </form>
      </div>
    </section>
  );
}
