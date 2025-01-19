import React from "react";
import { FaFacebookF  } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="w-full lg:w-1/2 p-8">
      <h2 className="text-2xl font-bold text-black mb-4">
        We Would Love to Hear from You
      </h2>
      <p className="text-gray-600 mb-6">
        Please write or call us with your questions or comments.
      </p>
      <div className="mb-6">
        <h3 className="font-semibold text-gray-700 mb-1">Address</h3>
        <p className="text-gray-600">
          123 Fifth Avenue, New York, NY 10160, USA
        </p>
      </div>
      <div className="mb-6">
        <h3 className="font-semibold text-gray-700 mb-1">Contact</h3>
        <p className="text-gray-600 flex flex-col">
          <span className="flex items-center">
            <span className="text-orange-500 mr-2">📞</span>
            <a
              href="tel:+191062685255"
              className="text-lg text-red-600 hover:underline"
            >
              +1 910-626-85255
            </a>
          </span>
          <span className="flex items-center mt-2">
            <span className="text-orange-500 mr-2">📧</span>
            <a
              href="mailto:contact@charity.com"
              className="text-lg text-blue-500 hover:underline"
            >
              contact@charity.com
            </a>
          </span>
        </p>
      </div>
      <div>
        <h3 className="font-semibold text-gray-700 mb-1">KEEP IN TOUCH</h3>
        <div className="flex space-x-4 mt-2">
          <a
            href="#facebook"
            className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center hover:bg-orange-600 transition"
          >
            <FaFacebookF/>
          </a>
          <a
            href="#twitter"
            className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center hover:bg-orange-600 transition"
          >
            <FaTwitter/>
          </a>
          <a
            href="#google"
            className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center hover:bg-orange-600 transition"
          >
            <FaGoogle/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
