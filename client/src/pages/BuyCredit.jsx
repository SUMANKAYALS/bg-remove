import React from "react";
import { DollarSign } from "lucide-react";
import { dataAssets, plans } from "../assets/assets/assets";
import Footer from "../components/Footer";

function BuyCredit() {
    return (
        <>
            <section className="min-h-[80vh] pt-24 pb-16 px-4 text-center">

                {/* Section Label */}
                <p className="text-sm font-medium text-gray-500 mb-3">
                    Pricing
                </p>

                {/* Heading */}
                <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
                    Choose the plan that’s right for you
                </h1>

                {/* Subheading */}
                <p className="text-gray-500 max-w-xl mx-auto mb-14">
                    Simple and transparent pricing. No hidden charges.
                    Pay only for what you need.
                </p>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((item, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-xl
              px-8 py-10 bg-white
              hover:shadow-md transition-shadow duration-300"
                        >
                            {/* Logo */}
                            <img
                                src={dataAssets.app_logo2}
                                alt="App logo"
                                className="w-9 mx-auto mb-6"
                            />

                            {/* Plan Name */}
                            <h2 className="text-lg font-medium text-gray-900 mb-2">
                                {item.id}
                            </h2>

                            {/* Description */}
                            <p className="text-sm text-gray-500 mb-8">
                                {item.desc}
                            </p>

                            {/* Price with Dollar Icon */}
                            <div className="flex justify-center items-end gap-1 mb-8">
                                <DollarSign className="w-5 h-5 text-gray-700 mb-1" />
                                <span className="text-3xl font-semibold text-gray-900">
                                    {item.price}
                                </span>
                            </div>

                            <p className="text-sm text-gray-500 mb-8">
                                {item.credits} credits
                            </p>

                            {/* CTA */}
                            <button
                                className="w-full py-2.5 rounded-md
                bg-gray-900 text-white text-sm font-medium
                hover:bg-gray-800 transition-colors"
                            >
                                Purchase
                            </button>
                        </div>
                    ))}
                </div>

                {/* Trust Line */}
                <p className="mt-12 text-xs text-gray-400">
                    Secure payment • No auto-renewal • Cancel anytime
                </p>
            </section>

            <Footer />
        </>
    );
}

export default BuyCredit;
