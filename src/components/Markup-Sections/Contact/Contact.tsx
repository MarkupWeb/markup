import React from 'react'
import ContactC from './'

function Contact() {
  return (
    <div>
      <ContactC data={{
        header: 'MARKUP',
        subheader: 'Marketing Agency',
        namePlaceholder: 'Name',
        phonePlaceholder: 'Phone',
        emailPlaceholder: 'Email',
        messagePlaceholder: 'Messsage',
        submitButtonText: 'Submit'
      }} />
    </div>
  )
}

export default Contact