import React from 'react'
import ContactInfo from './ContactInfo'
import ContactForm from './ContactForm'

function Contact_Us() {
  return (
    <div className="flex justify-center items-center py-10">
      <div className="flex flex-col lg:flex-row w-11/12 max-w-6xl space-y-6 lg:space-y-0 lg:space-x-6">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  )
}

export default Contact_Us
