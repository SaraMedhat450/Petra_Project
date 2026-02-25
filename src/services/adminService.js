import axios from "axios";

export const getPendingServices = async () => {
  const token = localStorage.getItem("token");

  return axios.get(
    "https://eeriest-asymptotically-sherie.ngrok-free.dev/api/services/pending",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};