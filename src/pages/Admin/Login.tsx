import { useRef } from "react";
import { BACKEND_URL } from "../../../config";
import { useNavigate } from "react-router-dom";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import axios from "axios";

async function checkloginCreds(
  userNameRef: React.RefObject<HTMLInputElement>,
  passwordRef: React.RefObject<HTMLInputElement>,
  navigate: (path: string) => void
) {
  const userNameValue = userNameRef.current ? userNameRef.current.value : "";
  const passwordValue = passwordRef.current ? passwordRef.current.value : "";

  const res = await axios.post(`${BACKEND_URL}admin/login`, {
    userName: userNameValue,
    password: passwordValue,
  });

  if (res.status !== 200) {
    alert("Invalid credentials");
    return;
  }

  res.data.token && localStorage.setItem("token", res.data.token);

  alert("Correct credentials");
  navigate("/admin/dashboard"); // Programmatically navigate to dashboard
}

export default function Login() {
  const userNameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate(); // React Router's navigation hook

  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col font-aleo">
      <div className="absolute -z-30 w-full h-screen">
        <AnimatedGridPattern
          repeatDelay={2}
          width={100}
          height={100}
          numSquares={5}
          className=""
        />
      </div>
      <div className="text-white text-3xl font-bold pb-5">ADMIN LOGIN</div>
      <div className="bg-white rounded-2xl flex-col p-5">
        <div className="flex flex-col mb-5">
          <div className="flex justify-center">
            <input
              ref={userNameRef}
              type="text"
              placeholder="username"
              className="LoginId w-5/6 h-11 bg-black rounded-xl text-white p-5"
            ></input>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex justify-center">
            <input
              ref={passwordRef}
              type="password"
              placeholder="password"
              className="LoginId w-5/6 h-11 bg-black rounded-xl text-white p-5"
            ></input>
          </div>
        </div>

        <div className="w-full flex items-center justify-center mt-10">
          <div className="w-52 h-12 bg-black rounded-2xl text-white flex">
            <button
              onClick={() =>
                checkloginCreds(userNameRef, passwordRef, navigate)
              }
              className="w-full h-12"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
