import React from 'react';
import Image from 'next/image';

const LoginPage = () => {
    return (
        <div className="font-sans bg-background-light dark:bg-background-dark">
            <div className="flex min-h-screen">
                <div className="flex flex-col justify-between w-full lg:w-1/2 p-8 sm:p-12 bg-background-light dark:bg-background-dark">
                    <div>
                        <h1 className="text-2xl font-bold text-text-light dark:text-text-dark">ShareStuff</h1>
                    </div>
                    <div className="w-full max-w-md mx-auto">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold text-text-light dark:text-text-dark">Welcome!</h2>
                            <p className="text-gray-500 dark:text-gray-400 mt-2">Please enter your details to login.</p>
                        </div>
                        <form>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-text-light dark:text-text-dark mb-1" htmlFor="email">Email address</label>
                                <input className="w-full px-4 py-3 rounded-lg bg-input-bg-light dark:bg-input-bg-dark border border-input-border-light dark:border-input-border-dark text-input-text-dark focus:outline-none focus:ring-2 focus:ring-primary/50 dark:focus:ring-primary/50" id="email" placeholder="Enter your email address" type="email" />
                            </div>
                            <div className="mb-6">
                                <div className="flex justify-between items-center mb-1">
                                    <label className="block text-sm font-medium text-text-light dark:text-text-dark" htmlFor="password">Password</label>
                                    <a className="text-sm font-medium text-text-light dark:text-text-dark hover:underline" href="#">Forgot password?</a>
                                </div>
                                <input className="w-full px-4 py-3 rounded-lg bg-input-bg-light dark:bg-input-bg-dark border border-input-border-light dark:border-input-border-dark text-input-text-dark focus:outline-none focus:ring-2 focus:ring-primary/50 dark:focus:ring-primary/50" id="password" placeholder="Enter your password" type="password" />
                            </div>
                            <button className="w-full bg-primary text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition-opacity" type="submit">
                                Login In
                            </button>
                        </form>
                    </div>
                    <div className="text-center">
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Don't have an account yet?
                            <a className="font-bold text-text-light dark:text-text-dark hover:underline" href="#"> Sign Up</a>
                        </p>
                    </div>
                </div>
                <div className="hidden lg:block lg:w-1/2">
                    <Image
                        src="/assets/signup.png"
                        alt="Modern living room."
                        width={1920}
                        height={1080}
                        className="object-cover w-full h-screen"
                        quality={100}
                    />

                </div>
            </div>

        </div>
    );
};

export default LoginPage;