import React from 'react';
import { FaTasks, FaClipboardList, FaCheckCircle } from 'react-icons/fa';

const FeatureSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <FaTasks className="text-4xl text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Task Management</h3>
            <p className="text-gray-600">Organize your tasks efficiently.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <FaClipboardList className="text-4xl text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Lists & Categories</h3>
            <p className="text-gray-600">Categorize tasks into lists.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <FaCheckCircle className="text-4xl text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Task Completion</h3>
            <p className="text-gray-600">Mark tasks as completed.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
