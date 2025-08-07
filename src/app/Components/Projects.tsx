import React from 'react'
import Link from 'next/link';
const Projects = () => {


  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Projects</h1>
      <p className="mb-8">
        A selection of projects I'm currently working on or have contributed to in the past. Each entry links to the project's website or repository. Many of these are collaborative efforts, but I've chosen to highlight those where I played a key role in their launch or development.
      </p>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-2/3">
          <h2 className="text-xl font-semibold mb-4">Active</h2>
          
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-medium">movement</span>
              <span className="text-sm bg-gray-100 px-2 py-1 rounded">SOFTWARE</span>
            </div>
            <p className="text-gray-600">Python tools for analysing body movements across space and time.</p>
          </div>

          <div className="border-t border-gray-200 my-6"></div>

          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-medium">NeuroBlueprint</span>
              <span className="text-sm bg-gray-100 px-2 py-1 rounded">STANDARDS</span>
            </div>
            <p className="text-gray-600">Lightweight data specification for systems neuroscience, inspired by BIDS.</p>
          </div>

          <div className="border-t border-gray-200 my-6"></div>

          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-medium">Drainglobe-template-builder</span>
              <span className="text-sm bg-gray-100 px-2 py-1 rounded">SOFTWARE</span>
            </div>
            <p className="text-gray-600">Build unbiased anatomical templates from individual 3D brain images.</p>
          </div>
        </div>

        <div className="md:w-1/3">
          <div className="sticky top-8">
            <div className="mb-8">
              <h3 className="font-medium mb-2">Type</h3>
              <div className="flex flex-wrap gap-2">
                <button className="px-3 py-1 bg-black text-white rounded">Active</button>
                <button className="px-3 py-1 bg-gray-100 rounded">Past</button>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2">Categories</h3>
              <div className="flex flex-col gap-1">
                <Link href="#" className="text-gray-600 hover:text-black">All (10)</Link>
                <Link href="#" className="text-gray-600 hover:text-black">Community (1)</Link>
                <Link href="#" className="text-gray-600 hover:text-black">Conference (1)</Link>
                <Link href="#" className="text-gray-600 hover:text-black">Dataset (1)</Link>
                <Link href="#" className="text-gray-600 hover:text-black">Software (5)</Link>
                <Link href="#" className="text-gray-600 hover:text-black">Standards (2)</Link>
                <Link href="#" className="text-gray-600 hover:text-black">Teaching (2)</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects
