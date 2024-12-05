import React, { useState } from 'react';
import { FaFolderOpen } from 'react-icons/fa'; // Importing a project icon

const ProjectCard = ({ project }) => {
  const [showMore, setShowMore] = useState(false);

  const displayedTags = showMore ? project.tags : project.tags.slice(0, 3);

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-[18rem]">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-36 object-cover"
      />
      <div className="p-3">
        <h3 className="text-md font-semibold mb-1">{project.title}</h3>
        <p className="text-gray-600 text-xs mb-3">{project.description}</p>
        
        {/* Tags container with wrapping */}
        <div className="mb-3 flex flex-wrap gap-2">
          {displayedTags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-700 text-xs font-medium px-2 py-0.5 rounded"
            >
              {tag}
            </span>
          ))}
          {/* Show 'More' button if there are more than 3 tags */}
          {project.tags.length > 3 && !showMore && (
            <button
              className="text-blue-600 text-xs font-medium"
              onClick={() => setShowMore(true)}
            >
              More...
            </button>
          )}
        </div>

        <div className="flex justify-between items-center mb-2">
          <a
            href={project.livePreview}
            className="text-blue-600 hover:text-blue-700 text-xs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Preview
          </a>
          <a
            href={project.viewCode}
            className="text-blue-600 hover:text-blue-700 text-xs"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Code
          </a>
        </div>
        <div className="mt-3 flex justify-between">
          <button className="text-gray-600 text-xs px-3 py-1 rounded hover:bg-red-600 hover:text-white">
            Delete
          </button>
          <button className="bg-gray-500 text-white text-xs px-3 py-1 rounded hover:bg-gray-600">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projectList = [
    {
      title: 'Database MGMT',
      description: 'This is a sample project description. Random things are here in the description.',
      tags: ['HTML', 'JavaScript', 'SASS', 'React', 'Node.js', 'MongoDB'], // Example with more than 3 tags
      image: 'https://via.placeholder.com/300x200', // Replace with your image URL
      livePreview: '#',
      viewCode: '#',
    },
    // Add more projects if needed
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        {/* Project Heading with Icon */}
        <div className="flex items-center space-x-2">
          <FaFolderOpen className="text-xl" />
          <h2 className="text-xl font-bold">Projects</h2>
        </div>

        <button className="border border-blue-500 text-blue-500 px-3 py-2 rounded-lg hover:bg-blue-50 text-xs">
          Add Projects
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projectList.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
