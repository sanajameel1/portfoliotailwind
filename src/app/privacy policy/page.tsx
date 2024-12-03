import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="bg-gray-400 min-h-screen flex flex-col items-center justify-start py-6 px-4">
      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl text-center font-bold mb-6">
        Privacy Policy:
      </h1>

      {/* Paragraph */}
      <p className="text-sm sm:text-base md:text-xl text-justify max-w-3xl">
        This Privacy Policy outlines how we collect, use, and protect your
        personal information when you visit or use our website. Your privacy is
        essential to us, and we are committed to safeguarding any data you
        share. Please take a moment to review our policy to understand our
        practices and your rights regarding your personal data.
      </p>
    </div>
  );
}