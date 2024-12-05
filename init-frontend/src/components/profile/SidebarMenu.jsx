import React from 'react';
import { FaUser, FaBriefcase, FaGraduationCap, FaCrown, FaPaperclip, FaIdBadge, FaFolderOpen } from 'react-icons/fa';

const SidebarMenu = ({ onMenuClick, selectedMenu }) => {
  const menuItems = [
    { name: "Profile", icon: <FaIdBadge />, color: "text-blue-600" },
    { name: "Information", icon: <FaUser />, color: "text-gray-600" },
    { name: "Projects", icon: <FaFolderOpen />, color: "text-gray-600" },
    { name: "Experiences", icon: <FaBriefcase />, color: "text-gray-600" },
    { name: "Education", icon: <FaGraduationCap />, color: "text-gray-600" },
    { name: "Skills", icon: <FaCrown />, color: "text-gray-600" },
    { name: "Attachments", icon: <FaPaperclip />, color: "text-gray-600" }
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <ul className="space-y-4">
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={`flex items-center space-x-2 rounded-lg p-2 cursor-pointer
              ${selectedMenu === item.name ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}
            onClick={() => onMenuClick(item.name)}
          >
            {item.icon}
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarMenu;
