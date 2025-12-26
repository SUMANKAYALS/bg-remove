import React, { useContext } from "react";
import { dataAssets } from "../assets/assets/assets";
import { AppContext } from "../context/AppContext";

function Upload() {

    const { removeBg } = useContext(AppContext)

    return (
        <div className="pb-16 flex flex-col items-center text-center">

            {/* Heading */}
            <h1
                className="text-2xl md:text-3xl lg:text-4xl font-semibold
        bg-gradient-to-r from-gray-900 to-gray-400
        bg-clip-text text-transparent
        py-6 md:py-16"
            >
                See the magic. Try it now
            </h1>

            {/* Upload Button */}
            <input onChange={e => removeBg(e.target.files[0])} type="file" accept="image/*" id="upload1" hidden />

            <label
                htmlFor="upload1"
                className="inline-flex items-center gap-3
        px-8 py-3.5 rounded-full cursor-pointer
        bg-gradient-to-r from-violet-600 to-fuchsia-500
        text-white text-sm font-medium
        hover:scale-105 hover:shadow-lg
        active:scale-95
        transition-all duration-300"
            >
                <img
                    src={dataAssets.upload_btn_icon}
                    alt="Upload"
                    className="w-5 h-5"
                />
                Upload your image
            </label>

            {/* Helper text */}
            <p className="mt-4 text-xs text-gray-500">
                JPG, PNG, WEBP
            </p>
        </div>
    );
}

export default Upload;
