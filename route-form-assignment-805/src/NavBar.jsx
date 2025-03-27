import React from "react";
import {Outlet, Link, useNavigate} from "react-router-dom";

function NavBar() {

    const nav = useNavigate();

    return (
        <>
            <div
                className="bg-[#282828] flex flex-row"
            >
                <Link
                    className="text-white mx-[2em]"
                    to="/"
                >
                    Home
                </Link>

                <p
                    className="text-white mx-[2em]"
                    onClick={() => nav("/LoginPage")}>
                    Login
                </p>

                <Link
                    className="text-white mx-[2em]"
                    to="/fav"
                >
                    FavouritesPage
                </Link>
            </div>

            <Outlet />
        </>

    )
}

export default NavBar;