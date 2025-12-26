import React, { useState } from "react";
import { dataAssets } from "../assets/assets/assets";

function BgSlider() {
    // 🔥 Default position = 90% (matches screenshot)
    const [sliderPosition, setSliderPosition] = useState(90);

    return (
        <section className="px-4 py-20">
            <h1
                className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold
        bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent mb-12"
            >
                Remove background with high <br /> quality and accuracy
            </h1>

            <div
                className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-xl shadow-lg aspect-[16/10]
        bg-[length:24px_24px]
        bg-[linear-gradient(45deg,#e5e7eb_25%,transparent_25%),linear-gradient(-45deg,#e5e7eb_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#e5e7eb_75%),linear-gradient(-45deg,transparent_75%,#e5e7eb_75%)]
        bg-[position:0_0,0_12px,12px_-12px,-12px_0]"
            >
                {/* LEFT: Original image */}
                <img
                    src={dataAssets.indian_bg_image}
                    alt="With background"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{
                        clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
                    }}
                />

                {/* RIGHT: Transparent background image */}
                <img
                    src={dataAssets.indian_wo_bg_image}
                    alt="Without background"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{
                        clipPath: `inset(0 0 0 ${sliderPosition}%)`
                    }}
                />

                {/* Divider */}
                <div
                    className="absolute top-0 bottom-0 w-[2px] bg-white shadow-md z-10"
                    style={{ left: `${sliderPosition}%` }}
                />

                {/* Handle */}
                <div
                    className="absolute top-1/2 -translate-y-1/2 w-9 h-9 rounded-full
          bg-white shadow-lg flex items-center justify-center cursor-ew-resize z-20"
                    style={{ left: `calc(${sliderPosition}% - 18px)` }}
                >
                    <span className="text-gray-700 font-bold">⇄</span>
                </div>

                {/* Slider */}
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderPosition}
                    aria-label="Background comparison slider"
                    onChange={(e) =>
                        setSliderPosition(Math.min(100, Math.max(0, e.target.value)))
                    }
                    className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                />
            </div>
        </section>
    );
}

export default BgSlider;
