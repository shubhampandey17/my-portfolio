import React, { useState } from 'react'

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
        First Name
        <input
        type="text"
        id="firstName"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        required/><br/>

        Last Name
      <input 
      type='text' 
      id='lastName'
      name='lastName'
      value={formData.lastName} 
      onChange={handleChange} 
      required/><br/>

        E-mail
      <input 
      type='text' 
      id='email' 
      name='email'
      value={formData.email} 
      onChange={handleChange} 
      required/><br/>

        PhoneNumber
      <input 
      type='tel' 
      id='phoneNumber' 
      name='phoneNumber'
      value={formData.phoneNumber} 
      onChange={handleChange} 
      required/><br/>

       Message
      <input 
      type='text' 
      id='message' 
      name='message'
      value={formData.message} 
      onChange={handleChange} 
      required/><br/>

      </div>

      <div className='buttons'>
      <button type='button' onClick={handleDownload}> Download Resume </button>
      <button type='submit'>Submit</button>
      </div>
      </form>

    </div>
  )
}

export default Contact