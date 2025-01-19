import React from 'react';
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { teamMembers } from './data';

const TeamSection = () => {
  return (
    <div className="bg-pink-50 py-12 px-14">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Our Team</h2>
        <div className="w-16 h-1 bg-orange-500 mx-auto mt-2"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-12 lg:px-24">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center p-10 rounded-lg">
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
            <p className="text-orange-500 text-sm mb-2">{member.title}</p>
            <p className="text-gray-600 text-sm mb-4">{member.description}</p>
            <div className="flex justify-center space-x-6">
              <a
                href={member.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-orange-500"
              >
                <RiFacebookFill className="w-5 h-5"/>
              </a>
              <a
                href={member.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-orange-500"
              >
                <FaTwitter className="w-5 h-5"/>
              </a>
              <a
                href={member.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-orange-500"
              >
                <FaLinkedin className="w-5 h-5"/>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
