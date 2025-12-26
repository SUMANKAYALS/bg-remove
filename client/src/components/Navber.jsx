import React from "react";
import { dataAssets } from "../assets/assets/assets";
import { Link } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

function Navbar() {

    const { openSignIn } = useClerk();
    const { isSignedIn, user } = useUser()

    return (
        <nav className="flex items-center justify-between mx-4 py-3 lg:mx-44">

            {/* Logo */}
            <Link to="/">
                <img
                    src={dataAssets.app_logo2}
                    alt="App Logo"
                    className="w-16 sm:w-18 md:w-20 object-contain cursor-pointer"
                />
            </Link>

            {
                isSignedIn ? <div>
                    <UserButton />
                </div> : <button
                    onClick={() => openSignIn({})}
                    className="flex items-center gap-2
        px-4 py-1.5 rounded-full
        text-xs font-semibold text-white
        bg-blue-600
        hover:bg-blue-700
        active:scale-95
        transition"
                >
                    Get Started
                    <img
                        src={dataAssets.arrow_icon}
                        alt="Arrow Icon"
                        className="w-3 h-3"
                    />
                </button>
            }

            {/* CTA Button (No action yet) */}


        </nav>
    );
}

export default Navbar;
