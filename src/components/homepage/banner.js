"use client";
import React from 'react';
import tasks from "../../assests/tasks.svg"
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const BannerSection = () => {
    const router = useRouter();
    const redirectAfterLogin = ()=>{
        router.push("/add-task");
    }
  return (
    <div className="bg-blue-500 text-white py-8">
      <div className="container mx-auto flex items-center justify-around">
        <div className="text-lg">
          <h1 className="text-3xl font-semibold mb-2">Welcome to Our Website</h1>
          <p className="text-base">Discover amazing content and services.</p>
          <button className="bg-white text-blue-500 px-6 py-3 rounded-full shadow-md hover:bg-blue-100 transition-colors mt-4" 
          onClick={redirectAfterLogin}>
            Get Started
          </button>
        </div>
        <div className="hidden md:block">
          <Image src={tasks} alt="Banner Image" className="w-64 h-auto shadow-md p-3" />
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
