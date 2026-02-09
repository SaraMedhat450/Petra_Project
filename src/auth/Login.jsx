// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Login() {
//   const navigate = useNavigate();

//   const [providers, setProviders] = useState([]);
//   const [customers, setCustomers] = useState([]);

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     As: "customer",
//   });

//   const [message, setMessage] = useState("");
//   const [open, setOpen] = useState(false);

//   // fetch providers
//   useEffect(() => {
//     fetch("https://6925767982b59600d723ba94.mockapi.io/users/hospitalUsers")
//       .then((res) => res.json())
//       .then((data) => setProviders(data));
//   }, []);

//   // fetch customers
//   useEffect(() => {
//     fetch("https://6925767982b59600d723ba94.mockapi.io/users/users2")
//       .then((res) => res.json())
//       .then((data) => setCustomers(data));
//   }, []);

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const { email, password, As } = formData;

//     if (!email || !password) {
//       setMessage("Please fill all fields!");
//       return;
//     }

//     let userFound = null;

//     if (As === "customer") {
//       userFound = customers.find(
//         (c) => c.email === email && c.password === password
//       );
//     } else {
//       userFound = providers.find(
//         (p) => p.email === email && p.password === password
//       );
//     }

//     if (!userFound) {
//       setMessage("User not found! Please check your data.");
//       return;
//     }

//     localStorage.setItem("isLoggedIn", "true");
//     localStorage.setItem("userRole", As);
//     localStorage.setItem("userData", JSON.stringify(userFound));

//     setMessage("Login successful!");

//     if (As === "customer") {
//       navigate("/customer");
//     } else {
//       navigate("/provider");
//     }
//   };

//   return (
//     <section className="min-h-screen flex items-center justify-center w-full">
//       <div
//         className="max-w-md rounded-lg shadow-lg p-8 w-full bg-brand-surface border border-brand-primary/10"
//       >
//         <h1 className="text-2xl font-bold text-center mb-6">
//           Sign in to your account
//         </h1>

//         <form onSubmit={handleSubmit} className="space-y-4">

//           <div>
//             <label className="block mb-1 text-sm font-medium">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all"
//               placeholder="name@company.com"
//             />
//           </div>

//           <div>
//             <label className="block mb-1 text-sm font-medium">Password</label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all"
//               placeholder="••••••••"
//             />
//           </div>

//           {/* Select Role */}
//           <div className="relative bg-white">
//             <button
//               type="button"
//               onClick={() => setOpen(!open)}
//               className="w-full border rounded-lg p-2 flex justify-between items-center"
//             >
//               {formData.As}
//               <i className="fa-solid fa-angle-right"></i>
//             </button>

//             {open && (
//               <div className="absolute z-10 mt-2 w-full bg-white border rounded-lg shadow">
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setFormData((prev) => ({ ...prev, As: "customer" }));
//                     setOpen(false);
//                   }}
//                   className="block w-full text-left px-4 py-2 hover:bg-gray-100"
//                 >
//                   Customer
//                 </button>

//                 <button
//                   type="button"
//                   onClick={() => {
//                     setFormData((prev) => ({ ...prev, As: "provider" }));
//                     setOpen(false);
//                   }}
//                   className="block w-full text-left px-4 py-2 hover:bg-gray-100"
//                 >
//                   Provider
//                 </button>
//               </div>
//             )}
//           </div>

//           <div className="flex justify-center">
//             <button
//               type="submit"
//               className="w-1/2 text-white rounded-lg py-2 bg-brand-dark hover:bg-brand-primary transition-colors font-medium"
//             >
//               Sign in
//             </button>
//           </div>

//           {message && (
//             <p className="text-center text-red-500 mt-2">{message}</p>
//           )}
//         </form>
//       </div>
//     </section>
//   );
// }

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // لازم تنزليها: npm install axios

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    As: "customer",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    const { email, password, As } = formData;

    if (!email || !password) {
      setMessage("Please fill all fields!");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        "https://eeriest-asymptotically-sherie.ngrok-free.dev/api/login",
        {
          email,
          password,
          role: As, // لو الـ API محتاج نوع المستخدم
        }
      );

      // لو التسجيل ناجح
      const userData = response.data; // البيانات اللي بيرجعها السيرفر
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userRole", As);
      localStorage.setItem("userData", JSON.stringify(userData));

      setMessage("Login successful!");
      
      if (As === "customer") {
        navigate("/customer");
      } else {
        navigate("/provider");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setMessage(error.response.data.message || "Login failed. Please try again.");
      } else {
        setMessage("Network error. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center w-full">
      <div className="max-w-md rounded-lg shadow-lg p-8 w-full bg-white border border-gray-200">
        <h1 className="text-2xl font-bold text-center mb-6">Sign in to your account</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
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
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              placeholder="••••••••"
            />
          </div>

          {/* Select Role */}
          <div className="relative bg-white">
            <button
              type="button"
              onClick={() => setFormData(prev => ({ ...prev, As: prev.As === "customer" ? "provider" : "customer" }))}
              className="w-full border rounded-lg p-2 flex justify-between items-center"
            >
              {formData.As}
              <i className="fa-solid fa-angle-right"></i>
            </button>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="w-1/2 text-white rounded-lg py-2 bg-blue-700 hover:bg-blue-600 transition-colors font-medium"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </div>

          {message && <p className="text-center text-red-500 mt-2">{message}</p>}
        </form>
      </div>
    </section>
  );
}
