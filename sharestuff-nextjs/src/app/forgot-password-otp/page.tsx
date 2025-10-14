'use client';

import React, { useState, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function OTPVerificationPage() {
    const [otp, setOtp] = useState<string[]>(Array(6).fill(''));
    const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

    const handleChange = (index: number, value: string) => {
        if (!/^[0-9]?$/.test(value)) return; // only digits
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
        if (value && index < otp.length - 1) inputsRef.current[index + 1]?.focus();
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputsRef.current[index - 1]?.focus();
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const enteredOtp = otp.join('');
        console.log('Entered OTP:', enteredOtp);
        // TODO: backend validation logic here
    };

    return (
        <>
            <Head>
                <title>OTP Verification | ShareStuff</title>
            </Head>

            {/* Left Section - OTP Form */}
            <div className=" justify-between w-full lg:w-1/2 p-8 sm:p-12">
                {/* Header */}
                <div>
                    <h1 className="text-2xl font-bold text-text-light dark:text-text-dark">ShareStuff</h1>
                </div>
            </div>
            <div>
                    {/* OTP Box */}
                    <div className="w-full max-w-md mx-auto">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold text-text-light dark:text-text-dark">
                                OTP Verification
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 mt-2">
                                Enter the 6-digit code sent to your email.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="mb-6 flex justify-center space-x-2">
                                {otp.map((digit, index) => (
                                    <input
                                        key={index}
                                        ref={(el) => {
                                            inputsRef.current[index] = el;
                                        }}
                                        className="w-12 h-14 text-center text-2xl font-bold rounded-lg bg-input-bg-light dark:bg-input-bg-dark border border-input-border-light dark:border-input-border-dark text-text-light dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-primary/50 dark:focus:ring-primary/50"
                                        maxLength={1}
                                        type="text"
                                        value={digit}
                                        onChange={(e) => handleChange(index, e.target.value)}
                                        onKeyDown={(e) => handleKeyDown(e, index)}
                                    />
                                ))}
                            </div>

                            <div className="text-center mb-6">
                                <button
                                    type="button"
                                    className="text-sm text-primary dark:text-primary-light hover:underline"
                                    onClick={() => console.log('Resend OTP')}
                                >
                                    Resend OTP
                                </button>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-primary text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition-opacity"
                            >
                                Confirm
                            </button>
                        </form>
                    </div>

                    {/* Footer */}
                    <div className="text-center mt-6">
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Didn’t receive the code?{' '}
                            <a className="font-bold text-text-light dark:text-text-dark hover:underline" href="#">
                                Try Again
                            </a>
                        </p>
                    </div>
                </div>

        </>
    );
}
