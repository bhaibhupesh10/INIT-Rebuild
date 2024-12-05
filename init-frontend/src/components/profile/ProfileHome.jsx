import React, { useState } from 'react';
import ProfileHeader from './ProfileHeader';
import SidebarMenu from './SidebarMenu';
import ProfileInfo from './ProfileInfo';
import Projects from './Projects';
import Experiences from './Experiences';
import Education from './Education';
import SkillsSection from './SkillSection';
import AttachmentsSection from './AttachmentsSection';
import Navbar from '../Navbar';

const ProfileHome = () => {
  const [selectedMenu, setSelectedMenu] = useState("Profile");

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };

  const renderContent = () => {
    switch (selectedMenu) {
      case "Information":
        return <ProfileInfo />;
      case "Projects":
        return <Projects />;
      case "Experiences":
        return <Experiences />;
      case "Education":
        return <Education />;
      case "Skills":
        return <SkillsSection />;
      case "Attachments":
        return <AttachmentsSection />;
      case "Profile":
        // Render all sections if "Profile" is selected
        return (
          <>
          
          <ProfileInfo />
            <Projects />
            <Experiences />
            <Education />
            <SkillsSection />
            <AttachmentsSection />
          </>
        );
      default:
        return <ProfileInfo />;
    }
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <Navbar />
      

      {/* Main content area */}
      <div className="flex-1 flex overflow-hidden mt-16">
        {/* Sidebar */}
        <div className="w-1/4 bg-gray-100 p-4 border-r border-gray-300">
          <SidebarMenu
            onMenuClick={handleMenuClick}
            selectedMenu={selectedMenu} // Pass selectedMenu to SidebarMenu
          />
        </div>
        {/* Content Area */}
        <div className="w-3/4 p-8 overflow-y-auto">
          <div className="mb-8">
            <ProfileHeader />
          </div>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default ProfileHome;
