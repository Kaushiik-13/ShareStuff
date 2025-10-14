'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function ForgotPasswordPage() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      setSuccess('');
      return;
    }

    if (newPassword.length < 6) {
      setError('Password must be at least 6 characters long.');
      setSuccess('');
      return;
    }

    // Simulate API call or password reset logic
    setError('');
    setSuccess('Password successfully reset!');
  };

  return (
    <div className="font-sans bg-background-light dark:bg-background-dark min-h-screen flex">
      {/* Left Section */}
      <div className="flex flex-col justify-between w-full lg:w-1/2 p-8 sm:p-12 bg-background-light dark:bg-background-dark">
        <div>
          <h1 className="text-2xl font-bold text-text-light dark:text-text-dark">
            ShareStuff
          </h1>
        </div>

        <div className="w-full max-w-md mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-text-light dark:text-text-dark">
              Forgot Password?
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Enter your new password below.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="new-password"
                className="block text-sm font-medium text-text-light dark:text-text-dark mb-1"
              >
                New Password
              </label>
              <input
                type="password"
                id="new-password"
                placeholder="Enter your new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-input-bg-light dark:bg-input-bg-dark border border-input-border-light dark:border-input-border-dark text-input-text-dark focus:outline-none focus:ring-2 focus:ring-primary/50 dark:focus:ring-primary/50"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium text-text-light dark:text-text-dark mb-1"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                placeholder="Confirm your new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-input-bg-light dark:bg-input-bg-dark border border-input-border-light dark:border-input-border-dark text-input-text-dark focus:outline-none focus:ring-2 focus:ring-primary/50 dark:focus:ring-primary/50"
              />
            </div>

            {error && (
              <p className="text-red-500 text-sm text-center mb-4">{error}</p>
            )}
            {success && (
              <p className="text-green-500 text-sm text-center mb-4">
                {success}
              </p>
            )}

            <button
              type="submit"
              className="w-full bg-primary text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition-opacity"
            >
              Confirm
            </button>
          </form>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Remembered your password?{' '}
            <a
              href="#"
              className="font-bold text-text-light dark:text-text-dark hover:underline"
            >
              Login
            </a>
          </p>
        </div>
      </div>

      <div className="hidden lg:block lg:w-1/2">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLvWRwj3ylhAtitFfw6timJh1bHGqaEzRqsv9OKF7Jl9NkbPTOsyWxXMmVSVVonQH5wuX9D4gPh8kKB0DaxjC-RBr3Tb-QlwbVGPoClx_MK0UVkJRdt_aZxjQtNSKMNNQ5ioMSA_L1vsPKLIbytgzzWv6DptoX36wbz0kCX0unhWRBbtefiPwPDfsuTER7DCFTrL1WVl1o0lHnHrzCJVRWq6aZTkjtQTKsph_Ch78xNkictjJWzW-eLkf_ILVicCO6uoZzuod4t90"
          alt="A stylish and modern living room with a couch, coffee table, and plants."
          width={800}
          height={1000}
          className="object-cover w-full h-screen"
          priority
        />
      </div>
    </div>
  );
}
