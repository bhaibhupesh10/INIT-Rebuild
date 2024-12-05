import React from 'react';
import { FaGraduationCap } from 'react-icons/fa'; // Importing an education icon

const EducationCard = ({ education }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 mb-6">
      <div className="flex justify-between items-start">
        <div className="flex items-center">
          <img src={education.logo} alt={education.school} className="w-12 h-12 rounded-full mr-4" />
          <div>
            <h3 className="text-lg font-semibold">{education.school}</h3>
            <p className="text-sm text-gray-600">
              {education.course} • {education.fieldOfStudy}
            </p>
            <p className="text-sm text-gray-500">
              Grade: {education.grade} • {education.year}
            </p>
          </div>
        </div>
        <div className="flex space-x-4">
          <button className="text-red-500 hover:text-red-600 text-sm">Delete</button>
          <button className="text-blue-500 hover:text-blue-600 text-sm">Edit</button>
        </div>
      </div>
      <p className="text-gray-700 text-sm mt-4">{education.description}</p>
      <a href={education.moreLink} className="text-blue-500 hover:text-blue-600 text-sm">
        See More
      </a>
    </div>
  );
};

const Education = () => {
  const educationList = [
    {
      school: 'California Institute of the Arts',
      course: 'UX Design Fundamentals',
      fieldOfStudy: 'UX Design',
      grade: 'A+',
      year: '2020 - 2021',
      description:
        'This hands-on course examines how content is organized and structured to create an experience for a user, and what role the designer plays in creating and shaping user experience. You will be led through a condensed...',
      logo: 'https://via.placeholder.com/48', // Replace with actual logo URL
      moreLink: '#',
    },
    {
      school: 'University of Pennsylvania',
      course: 'Gamification',
      fieldOfStudy: 'Game and Interactive Media Design',
      grade: 'A+',
      year: '2019 - 2020',
      description:
        'Gamification is the application of game elements and digital game design techniques to non-game problems, such as business and social impact challenges. This course will teach you the mechanisms of gamification...',
      logo: 'https://via.placeholder.com/48', // Replace with actual logo URL
      moreLink: '#',
    },
    // Add more education items if needed
  ];

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        {/* Education Heading with Icon */}
        <div className="flex items-center space-x-2">
          <FaGraduationCap className=" text-3xl" /> &nbsp;   {/* Education icon */}
          <h2 className="text-2xl font-bold">Education & Certifications</h2>
        </div>

        <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-lg hover:bg-blue-50">
          Add Education
        </button>
      </div>

      <div>
        {educationList.map((education, index) => (
          <EducationCard key={index} education={education} />
        ))}
      </div>

      <button className="text-blue-500 hover:text-blue-600 text-sm mt-4">Show 2 More Education</button>
    </div>
  );
};

export default Education;
