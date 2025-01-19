import React from "react";

const ContactForm: React.FC = () => {
  return (
    <div className="w-full lg:w-1/2 p-8">
      <h2 className="text-2xl font-bold text-black mb-6">Contact Us</h2>
      <form className="space-y-6">
        {/* First Name and Last Name */}
        <div className="flex space-x-4">
          <div className="w-1/2">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              placeholder="First Name"
              className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border-dotted"
              required
            />
          </div>
          <div className="w-1/2">
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              placeholder="Last Name"
              className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border-dotted"
              required  
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email Address"
            className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border-dotted"
            required
          />
        </div>

        {/* Subject */}
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Subject <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="subject"
            placeholder="Subject"
            className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border-dotted"
            required
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Your Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            placeholder="Your Message"
            className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border-dotted"
            rows={4}
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-max p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          Submit Form
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
