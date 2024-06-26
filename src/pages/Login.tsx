import { useState } from "react";
import { InputsReg } from "../types/types";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState<InputsReg>({
        email: "",
        password: "",
    });

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();

        const res = await fetch(
            `http://localhost:8080/api/auth/login`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: inputs.email,
                    password: inputs.password
                }),
            }
        );

        if (res.ok) {
            const data = await res.json();
            const jwtToken = data.token;
            localStorage.setItem('jwtToken', jwtToken);
            navigate("/")
        }
        console.log(localStorage.getItem("jwtToken"));
    };
    const handleChange =
        (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setInputs((prev) => {
                return { ...prev, [e.target.name]: e.target.value };
            });
        };

    return <div className="formContainer">
        <div className="formWrapper">

            <form
                className="flex flex-col w-1/2"
                onSubmit={handleSubmit}>
                <label> Login: admin@admin.com</label>
                <label> password: 1234</label>
                <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="bg-transparent rounded ring-2 ring-gray-600 p-2 font-bold"
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="bg-transparent rounded ring-2 ring-gray-600 p-2 font-bold"
                    onChange={handleChange}
                />

                <button
                    className="bg-transparent rounded ring-2 ring-gray-600 p-2 m-10 font-bold">
                    Sign In
                </button>
            </form>
        </div>
    </div>
}