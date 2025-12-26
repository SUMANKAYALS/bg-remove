import React from "react";
import {
    Github,
    Linkedin,
    Instagram,
} from "lucide-react";
import { dataAssets } from "../assets/assets/assets";

function Footer() {
    return (
        <footer className="bg-black mt-24">
            <div className="max-w-6xl mx-auto px-6 py-14">

                {/* Top Section */}
                <div className="flex flex-col md:flex-row justify-between gap-12">

                    {/* Brand with Logo */}
                    <div>
                        <div className="flex items-center gap-3">
                            <img
                                src={dataAssets.app_logo2}
                                alt="RemoveBG Logo"
                                className="w-10 h-10 object-contain"
                            />

                            <h2 className="text-xl font-semibold text-white">
                                Remove
                                <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                                    BG
                                </span>
                            </h2>
                        </div>

                        <p className="text-sm text-gray-400 mt-4 max-w-sm">
                            Remove image backgrounds instantly using AI.
                            Fast, accurate, and free to use.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="grid grid-cols-2 gap-12 text-sm">

                        <div>
                            <h3 className="font-medium text-white mb-4">Product</h3>
                            <ul className="space-y-3 text-gray-400">
                                <li className="hover:text-white cursor-pointer transition">
                                    How it works
                                </li>
                                <li className="hover:text-white cursor-pointer transition">
                                    Pricing
                                </li>
                                <li className="hover:text-white cursor-pointer transition">
                                    API
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-medium text-white mb-4">Company</h3>
                            <ul className="space-y-3 text-gray-400">
                                <li className="hover:text-white cursor-pointer transition">
                                    About
                                </li>
                                <li className="hover:text-white cursor-pointer transition">
                                    Privacy
                                </li>
                                <li className="hover:text-white cursor-pointer transition">
                                    Terms
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-800 mt-12"></div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6">

                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} RemoveBG. All rights reserved.
                    </p>

                    {/* Social Icons */}
                    <div className="flex items-center gap-5">

                        <a
                            href="https://www.instagram.com/sumankayal_/"
                            className="p-2 rounded-full border border-gray-800
              text-gray-400 hover:text-pink-500
              hover:border-pink-500 hover:scale-110
              transition-all duration-300"
                        >
                            <Instagram className="w-4 h-4" />
                        </a>

                        <a
                            href="https://github.com/SUMANKAYALS?tab=repositories"
                            className="p-2 rounded-full border border-gray-800
              text-gray-400 hover:text-white
              hover:border-white hover:scale-110
              transition-all duration-300"
                        >
                            <Github className="w-4 h-4" />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/suman-kayal10/"
                            className="p-2 rounded-full border border-gray-800
              text-gray-400 hover:text-blue-500
              hover:border-blue-500 hover:scale-110
              transition-all duration-300"
                        >
                            <Linkedin className="w-4 h-4" />
                        </a>

                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
