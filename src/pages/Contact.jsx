import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    // Display alert message
    alert('Form submitted successfully!');
  };

  const handleDownload = () => {
    const pdfUrl = '../ShubhamPandey_Resume.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'downloaded-file.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='contact'>
      <form onSubmit={handleSubmit}>
        <div className='inputs'>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder='Your First Name'
            value={formData.firstName}
            onChange={handleChange}
            required
          />

          <label htmlFor="lastName">Last Name:</label>
          <input
            type='text'
            id='lastName'
            name='lastName'
            placeholder='Your Last Name'
            value={formData.lastName}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">E-Mail:</label>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='Type your e-mail here'
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type='tel'
            id='phoneNumber'
            name='phoneNumber'
            placeholder='Type your Phone NO. here'
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id='message'
            name='message'
            placeholder='Type your message here'
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <div className='buttons'>
          <button type='button' onClick={handleDownload}>Download Resume</button>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
