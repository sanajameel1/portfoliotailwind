import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="h-screen bg-gray-400 flex justify-center items-center px-4">
      <div className="flex flex-col md:flex-row md:h-auto w-full md:w-10/12 bg-white rounded-lg shadow-lg">
        {/* Text Section */}
        <div className="flex flex-col flex-1 gap-4 justify-center p-6 text-center md:text-left">
          <h1 className="font-bold text-3xl mt-4 sm:text-4xl md:text-5xl">Sana Jameel</h1>
          <p className="font-normal text-sm sm:text-base md:text-lg">
            Hi, I`m Sana Jameel, a highly skilled web developer with extensive
            expertise in creating dynamic and responsive web applications.
            <br />
            <br />
            Currently, I`m part of an amazing training program at the Governor
            House, which has helped me grow tremendously. This program is guided
            by some of the most incredible mentors.
            <br />
            <br />
            In addition to my web development skills, I have strong command over
            programming languages such as HTML, CSS, JavaScript, TypeScript, and
            Next.js.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex flex-1 justify-center items-center p-6">
          <Image
            src="/dpimage.jpg"
            alt="Sana Jameel"
            width={150} // Default for small screens
            height={150}
            className="rounded-full sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-64 lg:h-64"
          />
        </div>
      </div>
    </div>
  );
}