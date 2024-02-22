import React from 'react';
import styles from './contactUs.module.css'; // Import your CSS module

const ContactUs = () => {
  return (
    <section className={`${styles.contact_us} mt-5 mb-5`}>
      <div className="container">

    
        <div className="row justify-content-center text-center">
          <div className="col-xl-12">
            <div className={ `${styles.contact_us_content} d-flex`}>



            <div className="col-lg-6 order-lg-1 mb-5 mb-lg-0 ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.4710534319565!2d8.540019475051109!3d12.011057535208982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae81417f09d5cb%3A0xc3df479c6725e7af!2sBrainstorm%20IT%20Solutions!5e0!3m2!1sen!2sng!4v1705913940974!5m2!1sen!2sng"
                width="100%"
                height="400"
                allowFullScreen=""
                loading="lazy"
                title="map"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            
              <div className="row justify-content-center">
                <div className="col-xl-8">
                  <h2>Contact Us</h2>
                  <p>Feel free to reach out to us for any inquiries or feedback. We'd love to hear from you!</p>
                  <form className={styles.contact_form}>
                    <div className="mb-4">
                      
                      <input type="text" className="form-control" id="name" placeholder='Name'/>
                    </div>
                    <div className="mb-4">
                     
                      <input type="email" className="form-control" id="email"placeholder='Email' />
                    </div>
                    <div className="mb-4">
                     
                      <textarea className="form-control" id="message" rows="4"></textarea>
                    </div>
                    <button type="submit" className="btns">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
