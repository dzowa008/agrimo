import React from 'react';
import '../styles/TeamSection.css'; // Import the custom CSS file

// Placeholder images - Replace with actual imports or URLs
// Ensure these paths correctly point to your image assets
const JACOB_IMAGE = '../src/assets/team1.jpg';
const CLARA_IMAGE = '../src/assets/team2.jpg';
const PAULA_IMAGE = '../src/assets/team3.jpg';
const CARLA_IMAGE = '../src/assets/team4.jpg';
const MARK_IMAGE = '../src/assets/team5.jpg'; // Assuming new images for second row
const JAMIE_IMAGE = '../src/assets/team6.jpg';
const ALICE_IMAGE = '../src/assets/team7.jpg';
const JULIA_IMAGE = '../src/assets/team8.jpg';

const teamMembers = [
  { name: 'Jacob Mersin', title: 'CEO OWNER', image: JACOB_IMAGE },
  { name: 'Clara Henry', title: 'SUPERVISOR', image: CLARA_IMAGE },
  { name: 'Paula Den', title: 'MANAGER', image: PAULA_IMAGE },
  { name: 'Carla Hall', title: 'MARKETING', image: CARLA_IMAGE },
  // New members for the second row
  { name: 'Mark Donald', title: 'SALES MANAGER', image: MARK_IMAGE },
  { name: 'Jamie Oliver', title: 'GARDEN EXPERTS', image: JAMIE_IMAGE },
  { name: 'Alice Waters', title: 'SENIOR MANAGER', image: ALICE_IMAGE },
  { name: 'Julia Taylor', title: 'SENIOR WORKER', image: JULIA_IMAGE },
];

const TeamMemberCard = ({ name, title, image }) => (
  <div className="team-card">
    
    {/* Image Container with Icon Overlay */}
    <div className="image-container">
      <img src={image} alt={`${name} - ${title}`} className="team-image" />
      
      {/* Share Icon (Yellow Circle) */}
      <div className="share-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          {/* Simple icon to represent the share/arrow graphic */}
          <path d="M12.854 3.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z" fill="#000"/>
          <path d="M5.5 10.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v3.5a.5.5 0 0 1-1 0v-3h-6v3.5a.5.5 0 0 1-1 0V8z" fill="#000"/>
          <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" fill="#000"/>
        </svg>
      </div>
    </div>
    
    {/* Text Content */}
    <div className="text-content">
      <div className="team-title">{title}</div>
      <div className="team-name">{name}</div>
    </div>
  </div>
);

const TeamSection = () => {
  return (
    <div className="team-section-container">
      <div className="team-members-grid">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default TeamSection;