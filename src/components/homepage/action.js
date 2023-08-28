"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
const ActionSection = () => {
    const router = useRouter();
    const redirectAfter = ()=>{
        router.push("/add-task");
    }
  return (
    <section
      className="relative py-24 bg-cover bg-center text-white object-contain"
      style={{ backgroundImage: "url('https://img.freepik.com/free-vector/business-team-discussing-ideas-startup_74855-4380.jpg?w=1060&t=st=1693139400~exp=1693140000~hmac=61c4f45a6f0654e280d5c547db82d714a5fd1db9ccd83a7d8893dfcb5df0cbe0')" }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-3xl font-semibold mb-8">Ready to Get Started?</h2>
        <p className="text-lg mb-6">
          Manage your tasks efficiently with our powerful task manager app.
        </p>
        <button className="bg-white text-blue-500 px-6 py-3 rounded-full shadow-md hover:bg-blue-100 transition-colors"
        onClick={redirectAfter}>
          Manage your tasks
        </button>
      </div>
    </section>
  );
};

export default ActionSection;
