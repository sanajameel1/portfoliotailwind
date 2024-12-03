import React from 'react'
import Image from 'next/image'

export default function page() {
  return (
    <div>
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-4 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-yellow-600">My Typescript Projects </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed  text-white  text-base"> Develops typesript projects including a calculator,Number Guessing Game,Currency converter,Countdown Timer,Student Management system,Atm Machine.</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/calculator.jpg"
          height={200}
          width={200}/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">

            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Calculator</h1>
            <p className="leading-relaxed">This is a cli base calculator.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/numbergussing.jpg"
          height={200}
          width={200}/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
     
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Number Guessing Game</h1>
            <p className="leading-relaxed">This is a cli base number guessing game.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/countdowntimer.jpg"
          height={200}
          width={200}/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
          
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Currency Converter</h1>
            <p className="leading-relaxed">This is a cli base currency converter.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/studentmanagment.jpg"
          height={200}
          width={200}/>          
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
          
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Student  Management System</h1>
            <p className="leading-relaxed">This is a cli base Student  Management System .</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/countdowntimer.jpg"
          height={200}
          width={200}/>

          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">

            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Count Down Timer </h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/atmimage.jpg"
          height={100}
          width={100}/>

          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">

            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Atm Machine</h1>
            <p className="leading-relaxed">This is a cli base Atm machine.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      
    </div>
  )
}




