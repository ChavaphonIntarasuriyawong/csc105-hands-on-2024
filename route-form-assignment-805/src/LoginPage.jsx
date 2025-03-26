import React from "react";
import z from "zod";
import {Link, useNavigate} from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

function LoginPage() {

    const navigate = useNavigate();

    const userSchema = z.object({
        name: z.string().min(1, "Name is required"),
        password: z.string().min(6, "Password is required"),
    })

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(userSchema),
    });

    const onSubmit = (data) => {
        navigate("/");
        console.log("Form submitted:", data);
    };

    return (
        <div
        >
            <form onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col"
            >
                <input {...register("name")} placeholder="Name"
                       className=""
                />
                {errors.name && <span className="text-lg text-[#FF6161]" >{"!!! " + errors.name.message + " !!!"}</span>}

                <input {...register("password")} placeholder="Password"
                       className=""
                />
                {errors.password && <span className="text-lg text-[#FF6161]" >{"!!! " + errors.password.message + " !!!"}</span>}


                <p className=""
                >
                    Don't have an account?
                    <Link className="underline"
                          to="/SignUpPage">
                        Register
                    </Link>
                </p>


                <button type="submit"
                        className=""
                >
                    Login
                </button>
            </form>
        </div>
    );
}

export default LoginPage;