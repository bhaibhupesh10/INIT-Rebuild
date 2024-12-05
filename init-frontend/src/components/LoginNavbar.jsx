import React from "react";
import { Link } from "react-router-dom";

// Custom styles for the active tab
const activeLinkStyle = "border-b-4 border-custom-red text-custom-red";
const defaultLinkStyle = "text-blue-500 hover:text-blue-700";

const LoginNavbar = ({ onTabChange, activeTab }) => {
  return (
    <div className="w-full">
      <nav className="flex justify-center space-x-8 mb-5">
        <Link
          to="/auth/student/login"
          onClick={(e) => {
            e.preventDefault(); // Prevent default link behavior
            onTabChange('/auth/student/login');
          }}
          className={`pb-2 ${activeTab === '/auth/student/login' ? activeLinkStyle : defaultLinkStyle} focus:outline-none focus:ring-2 focus:ring-blue-500`}
        >
          Student
        </Link>
        <Link
          to="/auth/recruiter/login"
          onClick={(e) => {
            e.preventDefault(); // Prevent default link behavior
            onTabChange('/auth/recruiter/login');
          }}
          className={`pb-2 ${activeTab === '/auth/recruiter/login' ? activeLinkStyle : defaultLinkStyle} focus:outline-none focus:ring-2 focus:ring-blue-500`}
        >
          Recruiter
        </Link>
        <Link
          to="/auth/coordinator/login"
          onClick={(e) => {
            e.preventDefault(); // Prevent default link behavior
            onTabChange('/auth/coordinator/login');
          }}
          className={`pb-2 ${activeTab === '/auth/coordinator/login' ? activeLinkStyle : defaultLinkStyle} focus:outline-none focus:ring-2 focus:ring-blue-500`}
        >
          Coordinator
        </Link>
        <Link
          to="/auth/verifier/login"
          onClick={(e) => {
            e.preventDefault(); // Prevent default link behavior
            onTabChange('/auth/verifier/login');
          }}
          className={`pb-2 ${activeTab === '/auth/verifier/login' ? activeLinkStyle : defaultLinkStyle} focus:outline-none focus:ring-2 focus:ring-blue-500`}
        >
          Verifier
        </Link>
      </nav>
    </div>
  );
};

export default LoginNavbar;
