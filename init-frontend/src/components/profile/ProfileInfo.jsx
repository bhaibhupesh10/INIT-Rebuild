import React from "react";

const ProfileInfo = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      {/* Top section: Profile image, basic information, and edit button */}
      <div className="flex justify-between items-center mb-6">
        {/* Left: Profile image and basic information */}
        <div className="flex items-center space-x-4">
          <img
            className="w-16 h-16 rounded-full"
            src="https://via.placeholder.com/150"
            alt="Profile"
          />
          <div>
            <h2 className="text-xl font-semibold">Basic Information</h2>
            <p className="text-gray-500">Update profile information</p>
          </div>
        </div>

        {/* Right: Edit button */}
        <div>
        <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-lg hover:bg-blue-50">
            Edit
          </button>
        </div>
      </div>

      {/* Bottom section: Contact and profile details */}
      <div className="grid grid-cols-2 gap-6">
        <div>
          <p className="text-gray-500">Email Address</p>
          <p className="font-semibold">info@init.org.in</p>
        </div>
        <div>
          <p className="text-gray-500">Gender</p>
          <p className="font-semibold">Male</p>
        </div>
        <div>
          <p className="text-gray-500">Phone Number</p>
          <p className="font-semibold">+91 9309101444</p>
        </div>
        <div>
          <p className="text-gray-500">Location</p>
          <p className="font-semibold">Indore, Madhya Pradesh</p>
        </div>
        <div>
          <p className="text-gray-500">Website</p>
          <p className="font-semibold">www.init.org.in</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
