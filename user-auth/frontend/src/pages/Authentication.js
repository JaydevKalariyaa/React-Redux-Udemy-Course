import AuthForm from "../components/AuthForm";
import { json, redirect } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export const authenticationAction = async ({ request, params }) => {
  let data = await request.formData();
  data = Object.fromEntries(data);
  const mode = new URL(request.url).searchParams.get("mode");
  try {
    const res = await axios.post(`http://localhost:8080/auth/${mode}`, data);

    toast.success(res.data.message);
    localStorage.setItem("token", res.data.token);
    return redirect("/");
  } catch (error) {
    if (error.response.status === 401 || error.response.status === 422) {
      Object.values(error.response.data.errors).map((err) => toast.error(err));
      return error;
    }
    throw json(
      { message: error.response.data.message },
      {
        status: 500,
      }
    );
  }
};
