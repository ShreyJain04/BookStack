import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../components/images/logo2.png"
import { baseurl } from "../App";

const ResetPassword = () => {
  const {id,token}= useParams()  
  const [login, setLogin] = useState({
    password: "",
  });

  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setLogin({
      ...login,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(login);

    try {
      const response = await fetch(baseurl+`/api/auth/reset-password/${id}/${token}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(login),
      });

      console.log("Login form", response);

      const res_data = await response.json();
      console.log("res from server", res_data.message);

      if (response.ok) {
        setLogin({ password: ""});
        toast.success("Password Updated");

        //storing the token in localhost
        storeTokenInLS(res_data.token);

        navigate("/login");
      } else {
        toast.error(
          res_data.message ? res_data.message : "Process failed!"
        );
      }
    } catch (error) {
      console.log("Login", error);
    }
  };
  return (
    <>
      <section class="bg-my_pink3 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-0 mx-auto sm: mt-8 my-24 md:h-screen my-20 lg:py-0 ">
          <a
            href="#"
            class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img class="w-12 h-12 mr-2" src={logo} alt="logo" />
            Book Stack
          </a>
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Reset Password
              </h1>
              <form class="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    New Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    autoComplete="off"
                    value={login.password}
                    onChange={handleInput}
                  />
                </div>

                
                <button
                  type="Submit"
                  class=" w-full  focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                >
                  Reset
                </button>
                
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
   );
};
export default ResetPassword;
