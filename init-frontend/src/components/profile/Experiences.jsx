import React from 'react';
import { FaBriefcase } from 'react-icons/fa'; // Importing an experience icon

const ExperienceCard = ({ experience }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 mb-6">
      <div className="flex justify-between items-start">
        <div className="flex items-center">
          <img src={experience.logo} alt={experience.position} className="w-12 h-12 rounded-full mr-4" />
          <div>
            <h3 className="text-lg font-semibold">{experience.position}</h3>
            <p className="text-sm text-gray-600">{experience.company}</p>
            <p className="text-sm text-gray-500">
              {experience.location} • {experience.dates}
            </p>
          </div>
        </div>
        <div className="flex space-x-4">
          <button className="text-red-500 hover:text-red-600 text-sm">Delete</button>
          <button className="text-gray-500 hover:text-gray-600 text-sm">Edit</button>
        </div>
      </div>
      <p className="text-gray-700 text-sm mt-4">{experience.description}</p>
      <a href={experience.moreLink} className="text-blue-500 hover:text-blue-600 text-sm">
        See More
      </a>
    </div>
  );
};

const Experiences = () => {
  const experienceList = [
    {
      position: 'Sr. Product Designer',
      company: 'ShareTrip Inc.',
      location: 'Dhaka, Bangladesh',
      dates: 'January 2022 to Present',
      description:
        "ShareTrip is the country's first and pioneer online travel aggregator (OTA). My goal was to craft a functional and delightful experience through web and mobile apps currently consisting of 1.2M+ & future billion users...",
      logo: 'https://via.placeholder.com/48', // Replace with actual logo URL
      moreLink: '#',
    },
    {
      position: 'Product Designer',
      company: 'Grameenphone',
      location: 'Dhaka, Bangladesh',
      dates: 'January 2022 to Present',
      description:
        "ShareTrip is the country's first and pioneer online travel aggregator (OTA). My goal was to craft a functional and delightful experience through web and mobile apps currently consisting of 1.2M+ & future billion users...",
      logo: 'https://via.placeholder.com/48', // Replace with actual logo URL
      moreLink: '#',
    },
    // Add more experiences if needed
  ];

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        {/* Experience Heading with Icon */}
        <div className="flex items-center space-x-2">
          <FaBriefcase className="text-2xl" /> &nbsp;  {/* Experience icon */}
          <h2 className="text-2xl font-bold">Experiences</h2>
        </div>

        <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-lg hover:bg-blue-50">
          Add Experience
        </button>
      </div>

      <div>
        {experienceList.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </div>

      <button className="text-blue-500 hover:text-blue-600 text-sm mt-4">Show 2 More Experiences</button>
    </div>
  );
};

export default Experiences;
