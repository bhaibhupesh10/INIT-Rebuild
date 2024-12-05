// import React from "react";

// const ProfileHeader = () => {
//   return (
//     <div className="flex justify-between items-center p-4 rounded-lg bg-white  mb-6">
//       {/* Profile Section */}
//       <div className="flex items-center space-x-4">
//         <img
//           src="https://via.placeholder.com/50" // Replace with your profile image URL
//           alt="Profile"
//           className="w-28 h-28 rounded-full"
//         />
//         <div>
//           <h2 className="text-2xl font-semibold">INIT LW</h2>
//           <p className="text-gray-500">Developer, DevOps Enthusiast</p>
//         </div>
//       </div>

//       {/* Icons Section */}
//       <div className="flex items-center space-x-4">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="28"
//           height="28"
//           viewBox="0 0 48 48"
//           className="text-blue-500 cursor-pointer"
//         >
//           <path fill="#1976D2" d="M38.1,31.2L19.4,24l18.7-7.2c1.5-0.6,2.3-2.3,1.7-3.9c-0.6-1.5-2.3-2.3-3.9-1.7l-26,10C8.8,21.6,8,22.8,8,24s0.8,2.4,1.9,2.8l26,10c0.4,0.1,0.7,0.2,1.1,0.2c1.2,0,2.3-0.7,2.8-1.9C40.4,33.5,39.6,31.8,38.1,31.2z"></path>
//           <path fill="#1E88E5" d="M11 17A7 7 0 1 0 11 31 7 7 0 1 0 11 17zM37 7A7 7 0 1 0 37 21 7 7 0 1 0 37 7zM37 27A7 7 0 1 0 37 41 7 7 0 1 0 37 27z"></path>
//         </svg>

//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="28"
//           height="28"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           className="text-blue-500 cursor-pointer"
//         >
//           <circle cx="5" cy="12" r="2" />
//           <circle cx="12" cy="12" r="2" />
//           <circle cx="19" cy="12" r="2" />
//         </svg>
//       </div>
//     </div>
//   );
// };

// export default ProfileHeader;

import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaUserAlt } from 'react-icons/fa';

const ProfileHeader = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex space-x-6">
      {/* Profile Image Section */}
      <div className="relative">
        <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
          <FaUserAlt className="text-gray-400 text-4xl" />
        </div>
        <div className="absolute bottom-0 right-0 bg-white p-1 rounded-full shadow-lg">
          {/* <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center text-white text-sm">63%</div> */}
        </div>
      </div>

      {/* Profile Information Section */}
      <div className="flex-grow">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Aakaar Pawar</h1>
            <p className="text-sm text-gray-500">Profile last updated - 20 Jul, 2024</p>
          </div>
          <button className="text-blue-500">✏️</button>
        </div>

        <div className="flex flex-col space-y-2 mt-4 text-gray-600">
          <div className="flex items-center">
            <FaMapMarkerAlt className="mr-2" />
            <span>Jaipur, INDIA</span>
          </div>
          <div className="flex items-center">
            <FaPhone className="mr-2" />
            <span>7489356891</span>
            <button className="text-blue-500 ml-2">Verify</button>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="mr-2" />
            <span>aakaarpawar7489@gmail.com</span>
            <span className="text-green-500 ml-2">✔️</span>
          </div>
          <div className="flex items-center">
            <span> Fresher</span>
          </div>
          {/* <div className="text-blue-500 cursor-pointer">Add availability to join</div> */}
        </div>
      </div>

      {/* Missing Details Section */}
    
    </div>
  );
};

export default ProfileHeader;
