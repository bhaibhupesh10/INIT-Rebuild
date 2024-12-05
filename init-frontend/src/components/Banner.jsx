import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import bannerImage from '../assets/images/643457.jpg'; // Adjust the path based on your folder structure
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBriefcase, faBox, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Banner = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle button clicks
  const handleButtonClick = (path) => {
    navigate(path); // Navigate to the specified path
  };

  return (
    <>
      <div
        className="relative bg-cover bg-center bg-no-repeat h-[450px] mt-[65px] flex items-center justify-center"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        {/* Optional: Add any banner content like a heading or call-to-action here */}

        {/* Main Content Section */}
        <section className="container-fluid px-5 mt-8 flex justify-center items-center h-auto">
          <div className="flex flex-col md:flex-row w-full max-w-screen-lg p-2 md:p-0 m-4 md:m-6">
            {/* Left Section */}
            <div id="about" className="col-12 md:w-[66.6667%] p-4 md:p-5 bg-[rgba(2,0,36,.5)] rounded-[20px] text-white">
              <h1 className="text-4xl font-bold mb-4">
                A one-stop portal for Placements & Internships
              </h1>
              <p className="hidden md:block text-xl">
                Welcome to the recruitment website of INIT.
                <br />
                Linux World is India's foremost industrial leadership development organisation. Our engineers
                are a combination of rigorous thinking, hard work, and a strong fundamental
                background. They are nurtured by the institute to strive for excellence and deliver
                impact in their field of work. Let us begin...
              </p>
            </div>

            {/* Right Section with Buttons */}
            <div className="col-12 md:w-[33.3333%] p-4 md:p-5 flex flex-col justify-center">
              <button
                className="text-white border-4 font-bold flex items-center justify-center py-3 mb-2 w-full rounded-lg bg-[#ea242a] hover:bg-[#c51e1d] transition-colors duration-300"
                onClick={() => handleButtonClick('/login')} // Navigate to SignIn page
              >
                <FontAwesomeIcon icon={faUser} className="mr-2" />
                Student
              </button>
              <button
                className="text-white border-4 font-bold flex items-center justify-center py-3 mb-2 w-full rounded-lg bg-[#ea242a] hover:bg-[#c51e1d] transition-colors duration-300"
                onClick={() => handleButtonClick('/login')} // Navigate to Recruiter SignIn page
              >
                <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
                Recruiter
              </button>
              <button
                className="text-white border-4 font-bold flex items-center justify-center py-3 mb-2 w-full rounded-lg bg-[#ea242a] hover:bg-[#c51e1d] transition-colors duration-300"
                onClick={() => handleButtonClick('/login')} // Navigate to Coordinator SignIn page
              >
                <FontAwesomeIcon icon={faBox} className="mr-2" />
                Coordinator
              </button>
              <button
                className="text-white border-4 font-bold flex items-center justify-center py-3 mb-2 w-full rounded-lg bg-[#ea242a] hover:bg-[#c51e1d] transition-colors duration-300"
                onClick={() => handleButtonClick('/login')} // Navigate to Verifier SignIn page
              >
                <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
                Verifier
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Banner;
