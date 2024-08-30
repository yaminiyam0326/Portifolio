import React from "react";

function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">Projects</h2>
        <div className="flex justify-center mt-8">
          {}
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-blue-600">Netflix Clone</h3>
              <p className="text-gray-700 mt-2">A Netflix clone is a web application that replicates the functionality and user interface of Netflix, a popular streaming service. This clone typically features a user-friendly interface where users can browse, search, and watch videos. It includes functionalities like user authentication (login/signup), a homepage displaying a list of movies and TV shows, categorized content sections, a video player for streaming, and possibly features like "My List" for saving favorite shows. The project may use technologies like React for the frontend, Node.js for the backend, and a database like MongoDB to store user and video information.</p>
            </div>
          </div>
          {/* Repeat project blocks as needed */}
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-blue-600">Swiggy Clone</h3>
              <p className="text-gray-700 mt-2">A Swiggy clone is a web or mobile application that mimics the functionality and design of Swiggy, a popular food delivery service. This clone typically allows users to browse a variety of restaurants and food items, place orders, track delivery status in real time, and make payments online. Key features include a user-friendly interface, restaurant and menu search, user authentication (login/signup), cart functionality, order history, and delivery tracking. The project might utilize technologies like React or Angular for the frontend, Node.js or Django for the backend, and a database like MongoDB or MySQL to manage user and order information.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
