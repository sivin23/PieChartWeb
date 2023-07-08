import React from 'react'

function Contact() {
  return (
    <div className='container contact-container'>
      <div>
        <h1>Contact Us</h1>
      </div>
      <div className='row'>
        <div className="col-6 mx-auto contact-content">
          <p className='lead'>Let us tailor a service package that meets your needs. Tell us a little about your business, and we will get back to you with some ideas as soon as possible.</p>
          <button className='contact-btn-container p-3'> <a href="https://wa.me/917012154921"><span><img className='mr-3' src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt='whatsapp logo' width="30px" /></span>Message Us On whatsApp</a> </button>
        </div>
        <div className='col-6 mx-auto mt-5'>
          <h2 className='h2 text-center'>PieChart Digital Solutions</h2>
          <h2 className='text-center'>Hours</h2>
          <p className='lead text-center'>
          <select name="opts" id="opts">
            <option value="1">Today By Appointment</option>
            <option value="1">Mon By Appointment</option>
            <option value="1">Tue By Appointment</option>
            <option value="1">Wed By Appointment</option>
            <option value="1">Fri By Appointment</option>
            <option value="1">Sat By Appointment</option>
            <option value="1">Sun By Appointment</option>
          </select>
           </p>
          
        </div>
      </div>
    </div>
  )
}

export default Contact