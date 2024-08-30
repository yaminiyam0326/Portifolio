import React from "react";

function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">My Skills</h2>
        <div className="flex justify-center mt-8">
          <div className="w-full md:w-1/3 p-4 text-center">
            <h3 className="text-xl font-bold text-blue-600">Figma</h3>
            <p className="text-gray-700 mt-2">Advanced</p>
          </div>
          <div className="w-full md:w-1/3 p-4 text-center">
            <h3 className="text-xl font-bold text-blue-600">Interaction Design</h3>
            <p className="text-gray-700 mt-2">Expert</p>
          </div>
          <div className="w-full md:w-1/3 p-4 text-center">
            <h3 className="text-xl font-bold text-blue-600">Visual Design</h3>
            <p className="text-gray-700 mt-2">Expert</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
