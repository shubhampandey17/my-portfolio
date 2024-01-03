import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const SocialMedia = () => {
  const handleRedirect = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="social-media">
      <FaGithub id='github' className="icon" onClick={() => handleRedirect('https://github.com/shubhampandey17')} />
      <FaLinkedin id='linkedin' className="icon" onClick={() => handleRedirect('https://in.linkedin.com/in/shubham-pandey-693b47226')} />
      <FaInstagram id='instagram' className="icon" onClick={() => handleRedirect('https://instagram.com/shubhampandey_111')} />
    </div>
  );
};

export default SocialMedia;
