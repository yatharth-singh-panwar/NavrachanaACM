import { useRef } from "react";
import { loginId, password } from "../../../INFO/Credentials";
import { useNavigate } from "react-router-dom";

function checkloginCreds(
    userNameRef: React.RefObject<HTMLInputElement>,
    passwordRef: React.RefObject<HTMLInputElement>,
    navigate: (path: string) => void
) {
    const userNameValue = userNameRef.current ? userNameRef.current.value : "";
    const passwordValue = passwordRef.current ? passwordRef.current.value : "";

    if (loginId !== userNameValue || password !== passwordValue) {
        alert("Invalid credentials");
        return;
    }

    alert("Correct credentials");
    navigate("/admin/dashboard"); // Programmatically navigate to dashboard
}

export default function Login() {
    const userNameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate(); // React Router's navigation hook

    return (
        <div className="w-screen h-screen flex justify-center items-center flex-col">
            <div className="text-white text-3xl font-bold pb-5">ADMIN LOGIN</div>
            <div className="w-96 h-96 bg-white rounded-2xl flex-col p-10">
                <div className="flex flex-col mb-10">
                    <div className="text-center font-bold text-xl mb-2">
                        Enter the username
                    </div>
                    <div className="flex justify-center">
                        <input
                            ref={userNameRef}
                            type="text"
                            placeholder="Enter the userid"
                            className="LoginId w-5/6 h-11 bg-black rounded-xl text-white p-5"
                        ></input>
                    </div>
                </div>

                <div className="flex flex-col">
                    <div className="text-center font-bold text-xl mb-2">
                        Enter the Password
                    </div>
                    <div className="flex justify-center">
                        <input
                            ref={passwordRef}
                            type="password"
                            placeholder="Enter the password"
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
