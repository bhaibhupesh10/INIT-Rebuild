import React from 'react';
import {  FaCrown } from 'react-icons/fa';

// Sample data for skills
const skills = [
  { id: 1, name: 'UX Design', level: 'Expert' },
  { id: 2, name: 'UI Design', level: 'Expert' },
  { id: 3, name: 'User Research', level: 'Expert' },
  { id: 4, name: 'Design System', level: 'Expert' },
];

const SkillItem = ({ skill }) => (
  <div className="flex justify-between items-center p-4 bg-white shadow-sm rounded-lg mb-4">
    <div>
      <h4 className="font-semibold text-lg">{skill.name}</h4>
      <p className="text-gray-500">{skill.level}</p>
    </div>
    <div className="flex space-x-2">
      {/* Edit Button */}
      <button className="text-blue-500 hover:text-blue-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M17.414 2.586a2 2 0 00-2.828 0l-10 10a2 2 0 00-.586 1.414V15a2 2 0 002 2h1.586a2 2 0 001.414-.586l10-10a2 2 0 000-2.828l-2.586-2.586zM7 14l8-8 2 2-8 8H7v-2zm-2 1v2h2l8-8-2-2-8 8z" />
        </svg>
      </button>
      {/* Delete Button */}
      <button className="text-red-500 hover:text-red-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 00-.894.553L8 5H4a1 1 0 100 2h.293l1.343 9.364A2 2 0 007.621 18h4.758a2 2 0 001.985-1.636L15.707 7H16a1 1 0 100-2h-4l-1.106-1.447A1 1 0 0010 3zM6 7h8l-1.25 8.75a1 1 0 01-.992.884H7.242a1 1 0 01-.992-.884L6 7zm3-2a1 1 0 112 0v1h-2V5z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  </div>
);

const SkillsSection = () => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
        <FaCrown className=" text-3xl" /> &nbsp; &nbsp;
          <div>
            <h2 className="text-xl font-semibold">Skills</h2>
            <p className="text-gray-500 text-sm">Add skills to increase the chance of hiring</p>
          </div>
        </div>
        <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-lg hover:bg-blue-50">
          Add Skills
        </button>
      </div>

      {/* Skill Items */}
      <div className="grid grid-cols-2 gap-4">
        {skills.map((skill) => (
          <SkillItem key={skill.id} skill={skill} />
        ))}
      </div>

      {/* Show More Link */}
      <div className="mt-4 text-blue-500 hover:text-blue-700 cursor-pointer">
        Show 8 More Skills
      </div>
    </div>
  );
};

export default SkillsSection;
