import React, { useState } from "react";
import GrouImage from "../assets/images/Group.svg";
import LoginNavbar from "./LoginNavbar";
import StudentLogin from "./StudentLogin";
import RecruiterLogin from "./RecruiterLogin"; 
import CoordinatorLogin from "./CoordinatorLogin";
import VerifierLogin from "./VerifierLogin";

const SignIn = () => {
  const [activeTab, setActiveTab] = useState('/auth/student/login'); // Default active tab

  // Handler to change the active tab
  const handleTabChange = (href) => {
    setActiveTab(href);
  };

  // Determine which component to display based on the active tab
  const renderContent = () => {
    switch (activeTab) {
      case '/auth/student/login':
        return <StudentLogin />;
      case '/auth/recruiter/login':
        return <RecruiterLogin />;
      case '/auth/coordinator/login':
        return <CoordinatorLogin />;
      case '/auth/verifier/login':
        return <VerifierLogin />;
      default:
        return <StudentLogin />; // Default component
    }
  };

  return (
    <div className="sign-in-container flex flex-col md:flex-row h-screen">
      {/* Left Split Section */}
      <div className="relative w-full md:w-1/3 h-full flex items-center justify-center p-5">
        <img
          src={GrouImage}
          alt="INIT Logo"
          className="w-full h-auto absolute inset-0 object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center p-4 text-center bg-opacity-50">
          <p className="text-white text-lg md:text-xl mb-2">
            <u>INIT Placements</u>
          </p>
          <p className="text-white text-lg md:text-xl">
            One-stop portal for students & companies for placements.
          </p>
        </div>
      </div>

      {/* Right Sign-In Form Section */}
      <div className="flex flex-col items-center justify-center w-full md:w-2/3 p-5">
        {/* Fixed Container */}
        <div className="w-full sticky top-0 bg-white z-10">
          <p id="tag-title" className="text-custom-red text-center mb-5 text-2xl font-bold leading-tight">
            Sign-in to INIT Placement Portal
          </p>
          {/* Pass the handler to LoginNavbar */}
          <LoginNavbar onTabChange={handleTabChange} />
        </div>

        {/* Scrollable Content Container */}
        <div className="w-full flex-grow overflow-y-auto">
          {/* Render the content based on active tab */}
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
