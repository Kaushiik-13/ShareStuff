'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SignupPage = () => {
    return (
        <div className="font-sans bg-background-light dark:bg-background-dark">
            <div className="flex h-auto min-h-screen lg:h-screen flex-col lg:flex-row overflow-y-auto">
                {/* Left Section */}
                <div className="flex flex-col w-full lg:w-1/2 p-6 sm:p-10 lg:p-12 bg-background-light dark:bg-background-dark 
                    justify-start lg:justify-between gap-8 lg:gap-0">
                    {/* Top Brand Header */}
                    <div>
                        <h1 className="text-2xl font-bold text-text-light dark:text-text-dark">ShareStuff</h1>
                    </div>


                    {/* Signup Form Section */}
                    <div className="w-full max-w-md mx-auto mt-6 sm:mt-8 lg:mt-0">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold text-text-light dark:text-text-dark">Create an Account</h2>
                            <p className="text-gray-500 dark:text-gray-400 mt-2">
                                Please fill in your details to sign up.
                            </p>
                        </div>

                        <form onSubmit={(e) => e.preventDefault()}>
                            {/* First and Last Name */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                                <div>
                                    <label htmlFor="first-name" className="block text-sm font-medium text-text-light dark:text-text-dark mb-1">
                                        First Name
                                    </label>
                                    <input
                                        id="first-name"
                                        placeholder="John"
                                        type="text"
                                        autoComplete="given-name"
                                        className="w-full px-4 py-3 rounded-lg bg-input-bg-light dark:bg-input-bg-dark border 
                    border-input-border-light dark:border-input-border-dark text-input-text-dark 
                    focus:outline-none focus:ring-2 focus:ring-primary/50"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="last-name" className="block text-sm font-medium text-text-light dark:text-text-dark mb-1">
                                        Last Name
                                    </label>
                                    <input
                                        id="last-name"
                                        placeholder="Doe"
                                        type="text"
                                        autoComplete="family-name"
                                        className="w-full px-4 py-3 rounded-lg bg-input-bg-light dark:bg-input-bg-dark border 
                    border-input-border-light dark:border-input-border-dark text-input-text-dark 
                    focus:outline-none focus:ring-2 focus:ring-primary/50"
                                    />
                                </div>
                            </div>

                            {/* Password Fields */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-text-light dark:text-text-dark mb-1">
                                        Password
                                    </label>
                                    <input
                                        id="password"
                                        placeholder="Enter your password"
                                        type="password"
                                        autoComplete="new-password"
                                        className="w-full px-4 py-3 rounded-lg bg-input-bg-light dark:bg-input-bg-dark border 
                    border-input-border-light dark:border-input-border-dark text-input-text-dark 
                    focus:outline-none focus:ring-2 focus:ring-primary/50"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="confirm-password" className="block text-sm font-medium text-text-light dark:text-text-dark mb-1">
                                        Confirm Password
                                    </label>
                                    <input
                                        id="confirm-password"
                                        placeholder="Confirm your password"
                                        type="password"
                                        autoComplete="new-password"
                                        className="w-full px-4 py-3 rounded-lg bg-input-bg-light dark:bg-input-bg-dark border 
                    border-input-border-light dark:border-input-border-dark text-input-text-dark 
                    focus:outline-none focus:ring-2 focus:ring-primary/50"
                                    />
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="mb-3">
                                <label htmlFor="phone" className="block text-sm font-medium text-text-light dark:text-text-dark mb-1">
                                    Phone Number
                                </label>
                                <input
                                    id="phone"
                                    placeholder="(123) 456-7890"
                                    type="tel"
                                    autoComplete="tel"
                                    className="w-full px-4 py-3 rounded-lg bg-input-bg-light dark:bg-input-bg-dark border 
                  border-input-border-light dark:border-input-border-dark text-input-text-dark 
                  focus:outline-none focus:ring-2 focus:ring-primary/50"
                                />
                            </div>

                            {/* Address */}
                            <div className="mb-3">
                                <label htmlFor="address" className="block text-sm font-medium text-text-light dark:text-text-dark mb-1">
                                    Address
                                </label>
                                <input
                                    id="address"
                                    placeholder="123 Main St"
                                    type="text"
                                    autoComplete="street-address"
                                    className="w-full px-4 py-3 rounded-lg bg-input-bg-light dark:bg-input-bg-dark border 
                  border-input-border-light dark:border-input-border-dark text-input-text-dark 
                  focus:outline-none focus:ring-2 focus:ring-primary/50"
                                />
                            </div>

                            {/* City and State */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                                <div>
                                    <label htmlFor="city" className="block text-sm font-medium text-text-light dark:text-text-dark mb-1">
                                        City
                                    </label>
                                    <input
                                        id="city"
                                        placeholder="San Francisco"
                                        type="text"
                                        autoComplete="address-level2"
                                        className="w-full px-4 py-3 rounded-lg bg-input-bg-light dark:bg-input-bg-dark border 
                    border-input-border-light dark:border-input-border-dark text-input-text-dark 
                    focus:outline-none focus:ring-2 focus:ring-primary/50"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="state" className="block text-sm font-medium text-text-light dark:text-text-dark mb-1">
                                        State
                                    </label>
                                    <input
                                        id="state"
                                        placeholder="CA"
                                        type="text"
                                        autoComplete="address-level1"
                                        className="w-full px-4 py-3 rounded-lg bg-input-bg-light dark:bg-input-bg-dark border 
                    border-input-border-light dark:border-input-border-dark text-input-text-dark 
                    focus:outline-none focus:ring-2 focus:ring-primary/50"
                                    />
                                </div>
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="w-full bg-primary text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition-opacity"
                            >
                                Sign Up
                            </button>
                        </form>
                    </div>

                    {/* Bottom Link */}
                    <div className="text-center mt-8 lg:mt-6">
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Already have an account?{' '}
                            <Link href="/login" className="font-bold text-text-light dark:text-text-dark hover:underline">
                                Login
                            </Link>
                        </p>
                    </div>
                </div>

                {/* Right Section */}
                <div className="hidden lg:block lg:w-1/2">
                    <Image
                        src="/assets/signup.png"
                        alt="Signup visual illustration."
                        width={1920}
                        height={1080}
                        className="object-cover w-full h-screen"
                        quality={100}
                        priority
                    />
                </div>
            </div>
        </div>
    );
};

export default SignupPage;
