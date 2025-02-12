import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginFn } from "./Redux/slices/LoginSlice";
import { setUser } from "./Redux/slices/UserInfo";
const Login = () => {
  const login = useSelector((state) => state.login);

  const user = useSelector((state) => state.userInfo);

const navigate = useNavigate();
const token = JSON.parse(localStorage.getItem("userInfo"))?.accessToken
  // hadii uu jiro user ku
  useEffect(() => {
    if (user?.name) {
      navigate("/posts");
    }
  }, [navigate]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    // Your submit logic here
    e.preventDefault();
    const data = {
      email,
      password,
    };

    dispatch(loginFn(data));
    console.log(data);
  };

  

  useEffect(() => {
    if (login.isError) {
      alert(login.errorMessage);
    }

    if (login.isSuccess) {
      navigate("/posts");
      const { name, accessToken, email, media, role } = login.data;
      dispatch(setUser({ name, accessToken, email, media, role }));
    }
  }, [login.isSuccess]);

  return (
    <div>
      <div className="w-full max-w-screen-lg px-4 py-2 mx-auto bg-white lg:px-8 lg:py-3 -mt-20">
        <section className="py-10  sm:py-16 lg:py-24">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative max-w-md mx-auto mt-8 md:mt-16">
              <div className="overflow-hidden bg-white border">
                <div className="px-4 py-6 sm:px-8 sm:py-7">
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-5">
                      <div>
                        <label
                          for=""
                          className="text-base font-medium text-gray-900"
                        >
                          {" "}
                          Email address{" "}
                        </label>
                        <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg
                              className="w-5 h-5"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                              />
                            </svg>
                          </div>

                          <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="Enter email to get started"
                            className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          for=""
                          className="text-base font-medium text-gray-900"
                        >
                          {" "}
                          Password{" "}
                        </label>
                        <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg
                              className="w-5 h-5"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                              />
                            </svg>
                          </div>

                          <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            name=""
                            id=""
                            placeholder="Enter your password"
                            className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                          />
                        </div>
                      </div>

                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          name="agree"
                          id="agree"
                          className="w-5 h-5 text-green-500 bg-white border-gray-200 rounded"
                          checked
                        />

                        <label
                          for="agree"
                          className="ml-3 text-sm font-medium text-gray-500"
                        >
                          I agree to Postcraft’s{" "}
                          <a
                            href="#"
                            title=""
                            className="text-blue-600 hover:text-blue-700 hover:underline"
                          >
                            Terms of Service
                          </a>{" "}
                          and{" "}
                          <a
                            href="#"
                            title=""
                            className="text-blue-600 hover:text-blue-700 hover:underline"
                          >
                            Privacy Policy
                          </a>
                        </label>
                      </div>

                      <div>
                        <button
                          type="submit"
                          className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                        >
                          Login
                        </button>
                      </div>

                      <div className="text-center">
                        <p className="text-base text-gray-600">
                          Already have an account?{" "}
                          <Link
                            to={"/signUp"}
                            title=""
                            className="font-medium text-orange-500 transition-all duration-200 hover:text-orange-600 hover:underline"
                          >
                            Login here
                          </Link>
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
