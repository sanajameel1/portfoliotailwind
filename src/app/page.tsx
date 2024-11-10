'use client'
import React from "react";
import Typewriter from 'typewriter-effect';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg:gridient-to-r from bg-cyan-800 to-cyan-800">
      <header className="bg-gradient-to-r from-cyan-600 to-cyan-500 text-white body-font shadow-lg">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <Image
      src="https://i.pinimg.com/736x/0d/99/1f/0d991fc0cc6fde06a084725c658ffd74.jpg"
              alt="Sana Jameel Logo"
              className="w-12 max-h-12 rounded-full transition-transform transform hover:scale-110 duration-300"
            />
            <span className="ml-3 text-2xl font-semibold tracking-wide">Sana Jameel</span>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center space-x-6">
          <a className="mr-5 text-white font-semibold hover:text-indigo-300 transition-all duration-300 ease-in-out transform hover:scale-110" href='http://localhost:3000'>Home</a>
      <a className="mr-5 text-white font-semibold hover:text-indigo-300 transition-all duration-300 ease-in-out transform hover:scale-110" href='http://localhost:3000/about' >About us</a>
      <a className="mr-5 text-white font-semibold hover:text-indigo-300 transition-all duration-300 ease-in-out transform hovescale-110r:" href='http://localhost:3000/contact'>Contact us</a>
      <a className="mr-5 text-white font-semibold hover:text-indigo-300 transition-all duration-300 ease-in-out transform hover:scale-110" href='  http://localhost:3000/privacypolicy'>Privacy policy</a>
      <a className='mr-5 text-white font-semibold hover:text-indigo-300 transition-all duration-300 ease-in-out transform hover:scale-110' href=' http://localhost:3000/projects'> Projects</a>
             
          </nav>
          <button className="inline-flex items-center bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-700 transition-all duration-300 ease-in-out rounded-full text-base font-medium mt-4 md:mt-0">
            Login
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-2 transition-all duration-300 ease-in-out transform hover:rotate-90"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
{/*hero section*/}
      <section className="text-gray-300  body-font hero-section">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col lg:flex-row">
    
    {/* Larger Rounded Image on the Left */}
    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 flex justify-center lg:justify-end lg:pr-8">
      <Image
        className="object-cover object-center rounded-full shadow-2xl w-80 h-80 lg:w-96 lg:h-96 transition-transform duration-500 hover:scale-105" 
  alt="hero" 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkIYO3ssKimMDpDwopA8E70zYj1C8Y3REsCq8C2ARCVRwPA-6PSftCW6BUkIDBK0INnTM&usqp=CAU" 
      />
    </div>

    {/* Content on the Right */}
    <div className="lg:w-1/2 w-full lg:pl-10 flex flex-col items-start text-left text-white">
      <h1 className="title-font  text-cyan-600 sm:text-4xl text-3xl mb-4  font-semibold font-serif bg-opacity-80 p-2 rounded-lg">
        Expertise in HTML, CSS, JavaScript, TypeScript
      </h1>

      {/* Typewriter Effect */}
      <h2 className="title-font font-extrabold bg-cyan-600 text-white p-2 mb-4 rounded-lg
      shadow-lg">
        <Typewriter
          options={{
            strings: ['Web Developer', 'GIAIC Student Quarter 2'],
            autoStart: true,
            loop: true,
          }}
        />
      </h2>

      <p className="mb-8 leading-relaxed font-bold bg-cyan600 bg-opacity-80 p-4 rounded-lg shadow-md">
        My name is Sana Jameel, and my portfolio is a representation of all that I’ve learned and accomplished as an Information Technology student.
      </p>

      <div className="flex justify-start">

      <button className="inline-flex text-white bg-blue-700 border-0 py-2 px-6 focus:outline-none hover:bg-blue-900 rounded text-lg transitions-colors duration-300 shadow-lg">
          Subscribe Now
        </button>
      </div>
    </div>
  </div>

  <style jsx>{`
    {/* Dark Background with Subtle Animation */}
    .hero-section {
      background: radial-gradient(circle, #111827, #1f2937, #374151);
      animation: backgroundMove 10s ease-in-out infinite;
    }
       .blog-section {
      background: radial-gradient(circle, #111827, #1f2937, #374151);
      animation: backgroundMove 10s ease-in-out infinite;
    }

    /* Background Animation */
    @keyframes backgroundMove {
      0% { background-position: 0% 0%; }
      50% { background-position: 100% 100
      100% { background-position: 0% 0%; }
    }
  `}</style>



</section>
 {/*blog section*/}
<section className="bg-gradient-to-r from-gray-800 to-gray-800 body-font bg-gray-200 blog-section">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">

      {/* Card 1 */}
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-300 border-opacity-60 rounded-lg overflow-hidden bg-yellow-600 shadow-lg">
          <Image className="lg:h-48 md:h-36 w-full object-cover object-center" src="data:image/jpeg;base64,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" alt="blog" />
          <div className="p-6">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Currency Converter</h1>
            <p className="leading-relaxed mb-3">This is a CLI-based currency converter.</p>
            <div className="flex items-center flex-wrap">
              <a className="text-indigo-600 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-300">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-300 border-opacity-60 rounded-lg overflow-hidden bg-yellow-600 shadow-lg">
          <Image className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwQSZm7u65ZoKvj7r3-U8_XIYBJ488yZRgag&s" alt="blog" />
          <div className="p-6">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Countdown Timer</h1>
            <p className="leading-relaxed mb-3">This is a CLI-based countdown timer.</p>
            <div className="flex items-center flex-wrap">
              <a className="text-indigo-600 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-300">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-300 border-opacity-60 rounded-lg overflow-hidden bg-yellow-600 shadow-lg">
          <Image className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwiJ4xao_wV-_Re3N1iNuAlMz0sZyLdPegzg&s" alt="blog" />
          <div className="p-6">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Adventure Game</h1>
            <p className="leading-relaxed mb-3">This is a CLI-based adventure game.</p>
            <div className="flex items-center flex-wrap">
              <a className="text-indigo-600 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg className="w-4 h-4 ml-2" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-300">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
       </div>
     </div>
     </div>
     </div>
     </div>
     </div>
     </section>

     {/*Gallery*/}

     <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="text-center mb-20">
      <h1 className="sm:text-3xl text-2xl  text-center title-font font-extrabold text-yellow-600 mb-4">Project Features & Commands</h1>
      <p className="text-base leading-relaxed text-white font-bold xl:w-2/4 lg:w-3/4 mx-auto">Explore the Essential features of each Typescript project and easily run them using the npx commands provided belo: .</p>
    </div>
    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font   text-yellow-600 font-medium">simple-calculator</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-white rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font text-yellow-600 font-medium">number-guessing</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font  text-yellow-600 font-medium">atm-machine</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font text-yellow-600 font-medium">to-do-list-</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font  text-yellow-600 font-medium">currency-converter</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font  text-yellow-600 font-medium">word-counter</span>
        </div>
      </div>
    </div>
     <a href='https://github.com/sanajameel1'>
    <button className="bg-gray-100 flex mx-auto py-3 px-5 rounded-lg items-center hover:bg-pink-400 focus:outline-none ">
       <Image className='w-10 h-18' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW1Zb8qAC9MjY8ATGb7KRAX2n7Te8VJCi_8HI2lycowx0S7qIlymywEFYaLA&s" alt=""/>
        <span className="ml-4 flex items-start flex-col leading-none">
          <span className="text-xs text-white mb-1"> Github</span>
          <span className="title-font text-black font-bold">Sana Jameel</span>
          </span>
          </button>
         </a>
  </div>
</section>
{/*gallery*/}
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="text-center mb-20">
      <h1 className="sm:text-3xl text-2xl  text-center title-font font-extrabold text-yellow-600 mb-4">Project Features & Commands</h1>
      <p className="text-base leading-relaxed text-white font-bold xl:w-2/4 lg:w-3/4 mx-auto">Explore the Essential features of each Typescript project and easily run them using the npx commands provided belo: .</p>
    </div>
    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font   text-yellow-600 font-medium">simple-calculator</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-white rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font text-yellow-600 font-medium">number-guessing</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font  text-yellow-600 font-medium">atm-machine</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font text-yellow-600 font-medium">-to-do-list-</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font  text-yellow-600 font-medium">currency-converter</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font  text-yellow-600 font-medium">word-counter</span>
        </div>
      </div>
    </div>
     <a href='https://github.com/sanajameel1'>
    <button className="bg-gray-100 flex mx-auto py-3 px-5 rounded-lg items-center hover:bg-pink-400 focus:outline-none bg-red-500">
       <Image className='w-10 h-18' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW1Zb8qAC9MjY8ATGb7KRAX2n7Te8VJCi_8HI2lycowx0S7qIlymywEFYaLA&s" alt=""/>
        <span className="ml-4 flex items-start flex-col leading-none">
          <span className="text-xs text-white mb-1"> Github</span>
          <span className="title-font text-black font-bold">Sana Jameel</span>
          </span>
          </button>
         </a>
  </div>
</section>

{/*Gallery*/}

<section className="text-gray-600 body-font">
  <div className="container px-5 py-4 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-yellow-600">My Typescript Projects </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed  text-white  text-base"> Develops typesript projects including a calculator,Number Guessing Game,Currency converter,Countdown Timer,Student Management system,Atm Machine.</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3GqG8R5nBt41wv4cmB8ArhJEJeaaeLp6fkg&s"/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">

            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Calculator</h1>
            <p className="leading-relaxed">This is a cli base calculator.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6PPjOR77DSfpwaaO_Ibe-rnCc0uO5l1ZPqw&s"/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
     
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Number Guessing Game</h1>
            <p className="leading-relaxed">This is a cli base number guessing game.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2021/06/getty_currency-exchange_062321.jpeg.jpg"/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
          
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Currency Converter</h1>
            <p className="leading-relaxed">This is a cli base currency converter.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7RSMkaeFlWmJ5GGMFg7HmG0zF0XUwDDS_Hg&s"/>          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
          
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Student  Management System</h1>
            <p className="leading-relaxed">This is a cli base Student  Management System .</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Gw8VU6pnXuLbxBoCuP4xSnG7jkw_zIhAuA&s"/>

          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">

            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Count Down Timer </h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVtTGTUxooDz58yd7qjzHN-sTl31y7kPI4bQ&s"/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">

            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Atm Machine</h1>
            <p className="leading-relaxed">This is a cli base Atm machine.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/*Content*/}
<section className="text-gray-600 body-font">
 
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-200">Unlocking My Skills Set The Hidden Talent</h1>
        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Highlights the range of skills and experties,emphasizing the impact and value brought to my projects .</p>
    </div>
  </section>
  {/*typewriter effect*/}
  


      {/* Developement Tools And Frame Works Icon*/ }
      <section>
        
   
        
       <div className='container px-2 py-8 mx-auto   flex flex-wrap flex justify-center items-center space-x-6 text-2xl'>
<h1 className='text-yellow-600 font-bold'>
<Typewriter
  options={{
    strings: ['Programing', 'Languages'],
    autoStart: true,
    loop: true,
  }}
/>
</h1>

        {/* icons*/}
    <div className='flex-col item-center bg-black border-2 border-sky-400 p-4 transition-transform duration-100 ease-in-out transform
    hover:scale-110'>

    <FaHtml5  className='text-red-700 text-6xl'/>
    <span className='mt-2 text-lg text-white'> HTML </span>
    </div>

    <div className='flex-col item-center bg-black border-2 border-sky-400 p-4 transition-transform duration-100 ease-in-out transform
    hover:scale-110'>

<FaCss3  className='text-orange-400 text-6xl'/>
    <span className='mt-2 text-lg text-white'> CSS </span>
    </div>

    <div className='flex-col item-center bg-black border-2 border-sky-400 p-4 transition-transform duration-100 ease-in-out transform
    hover:scale-110'>

<IoLogoJavascript    className='text-yellow-400 text-6xl'/>
    <span className='mt-2 text-lg text-white'> JAVASCRIPT </span>
    </div>


    <div className='flex-col item-center bg-black border-2 border-sky-400 p-4 transition-transform duration-100 ease-in-out transform
    hover:scale-110'>

<SiTypescript   className='text-sky-600 text-6xl'/>
    <span className='mt-2 text-lg text-white'> Typescript </span>
    </div>



    <div className='flex-col item-center bg-black border-2 border-sky-400 p-4 transition-transform duration-100 ease-in-out transform
    hover:scale-110'>


<FaPython    className='text-green-600 text-6xl'/>
    <span className='mt-2 text-lg text-white'> Python </span>
    </div>


    
      </div>
        </section>
  <section className="text-gray-600 body-font">
  <div className="container px-5 py-12 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-yellow-600">Our Team</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base font-semibold text-gray-500">Here is My zoom Live class Team Members.</p>
    </div>
    <div className="flex flex-wrap -m-2">
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <Image alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtQ-qHfCrm9svO3WvHfmIdxyPnucFcmTSuPA&s"/>
          <div className="flex-grow">
            <h2 className="text-yellow-600 title-font font-medium">Pashmeen Zia</h2>
            <p className="text-gray-500">UI Designer</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <Image alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRhbXit2OhSwmwYaW4fATX1omYqtXzNM2g2A&s"/>
          <div className="flex-grow">
            <h2 className="text-yellow-600 title-font font-medium">Umer Farooq</h2>
            <p className="text-gray-500">Developer</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <Image alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtQ-qHfCrm9svO3WvHfmIdxyPnucFcmTSuPA&s"/>
          <div className="flex-grow">
            <h2 className="text-yellow-600 title-font font-medium">Hafsa Kamali</h2>
            <p className="text-gray-500">Developer</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <Image alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRhbXit2OhSwmwYaW4fATX1omYqtXzNM2g2A&s"/>
          <div className="flex-grow">
            <h2 className="text-yellow-600 title-font font-medium">Noor Fatima</h2>
            <p className="text-gray-500">DevOps</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <Image alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtQ-qHfCrm9svO3WvHfmIdxyPnucFcmTSuPA&s"/>
          <div className="flex-grow">
            <h2 className="text-yellow-600 title-font font-medium">Iqra Ikram</h2>
            <p className="text-gray-500">Software Engineer</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <Image alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtQ-qHfCrm9svO3WvHfmIdxyPnucFcmTSuPA&s"/>
          <div className="flex-grow">
            <h2 className="text-yellow-600 title-font font-medium">Rija Zeeshan</h2>
            <p className="text-gray-500">DevOps</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <Image alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtQ-qHfCrm9svO3WvHfmIdxyPnucFcmTSuPA&s"/>
          <div className="flex-grow">
            <h2 className="text-yellow-600 title-font font-medium">Areeba Khijli</h2>
            <p className="text-gray-500">Software Engineer</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <Image alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtQ-qHfCrm9svO3WvHfmIdxyPnucFcmTSuPA&s"/>
          <div className="flex-grow">
            <h2 className="text-yellow-600 title-font font-medium">Ruba Haroon</h2>
            <p className="text-gray-500">DevOps</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <Image alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtQ-qHfCrm9svO3WvHfmIdxyPnucFcmTSuPA&s"/>
          <div className="flex-grow">
            <h2 className="text-yellow-600 title-font font-medium">Fiza Sagar</h2>
            <p className="text-gray-500">DevOps</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/*contact*/}
<section className="text-gray-300 body-font relative">
  <div className="absolute inset-0 bg-gray-300">
  <iframe width="100%" height="100%"   title="map"  src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"/>
    </div>
  <div className="container px-5 py-12 mx-auto flex bg-yellow-600">
    <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
      <p className="leading-relaxed mb-5 text-gray-600">please this form if you have any queries or complains or if you have any message for us</p>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
        <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
      <p className="text-xs text-gray-500 mt-3">Read our Privacy policy for any issues .</p>
    </div>
  </div>
  
</section>

{/*footer*/}
<footer className="text-white  from-gray-600 to-gray-500 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <Image
       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS3uvSuDAm4janztLTjGf43Rs2tyBZ0ow46Q&s"
       alt='NF logo'
       className='w-10 max-h-10 rounded-full'/>
       
      <span className="ml-3 text-white text-xl">Sana Jameel</span>
    </a>
    <p className=" text-white text-sm text-black sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4"> 2024 Sana Jameel
      <a href="https://twitter.com/knyttneve" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank"></a>
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a className="text-white">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </a>
      <a className="ml-3 text-white">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg>
      </a>
      <a className="ml-3 text-white">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>
      <a className="ml-3 text-white">
        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </a>
    </span>
  </div>
</footer>
</div>
  )
}
