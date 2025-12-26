import React from "react";
import { dataAssets } from "../assets/assets/assets";

function Steps() {
    return (
        <section className="mx-4 lg:mx-44 py-20 xl:py-40">

            <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold
        bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent">
                Steps to remove image background <br /> in seconds
            </h1>

            {/* GRID FIX */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 xl:mt-24">

                {/* Box 1 */}
                <div className="flex gap-4 bg-white border shadow-sm hover:shadow-lg
          p-7 pb-10 rounded-xl transition-all duration-500 hover:-translate-y-1">
                    <img className="w-9 h-9" src={dataAssets.upload_icon} alt="" />
                    <div>
                        <p className="text-lg font-semibold">Upload image</p>
                        <p className="text-sm text-neutral-500 mt-2">
                            Upload any photo from your device instantly.
                        </p>
                    </div>
                </div>

                {/* Box 2 */}
                <div className="flex gap-4 bg-white border shadow-sm hover:shadow-lg
          p-7 pb-10 rounded-xl transition-all duration-500 hover:-translate-y-1">
                    <img className="w-9 h-9" src={dataAssets.remove_bg_icon} alt="" />
                    <div>
                        <p className="text-lg font-semibold">Remove background</p>
                        <p className="text-sm text-neutral-500 mt-2">
                            AI removes the background in seconds.
                        </p>
                    </div>
                </div>

                {/* Box 3 */}
                <div className="flex gap-4 bg-white border shadow-sm hover:shadow-lg
          p-7 pb-10 rounded-xl transition-all duration-500 hover:-translate-y-1">
                    <img className="w-9 h-9" src={dataAssets.download_icon} alt="" />
                    <div>
                        <p className="text-lg font-semibold">Download image</p>
                        <p className="text-sm text-neutral-500 mt-2">
                            Download your transparent image instantly.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Steps;
