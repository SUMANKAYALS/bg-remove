import React from "react";
import { testimonialsData } from "../assets/assets/assets";

function Testimonials() {
    return (
        <section className="px-4 py-20">

            <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold
        bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent mb-16">
                Customer Testimonials
            </h1>

            {/* CENTERED TWO BOXES */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 
        max-w-4xl mx-auto justify-items-center">

                {testimonialsData.slice(0, 2).map((item, index) => (
                    <div
                        key={index}
                        className="bg-white border rounded-xl p-8 w-full max-w-md
            shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1"
                    >
                        <p className="text-4xl text-gray-300 mb-4">“</p>

                        <p className="text-gray-600 text-sm mb-6">
                            {item.text}
                        </p>

                        <div className="flex items-center gap-4">
                            <img
                                src={item.image}
                                alt={item.author}
                                className="w-12 h-12 rounded-full object-cover border"
                            />
                            <div>
                                <p className="font-semibold">{item.author}</p>
                                <p className="text-xs text-gray-500">{item.jobTitle}</p>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
}

export default Testimonials;
