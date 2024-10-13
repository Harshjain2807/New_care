import {React }from "react";

import { Link } from "react-router-dom";

const Contact = () => {
  

  return (
    <section>
      <div className="px-5 mx-auto max-w-screen-md">
        <h2 className="heading text-center">Contact us</h2>
        <p className="mb-8 lg:mb-16 font-light text-center textPara">
          Got a technical issue? Want to send feedback? let us know
        </p>
        <form action="#" className="space-y-8">
          <div>
            <label htmlFor="email" className="formLabel">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
            
              placeholder="abc@gmail.com"
              className="formInput mt-1"
            />
          </div>
          <div>
            <label htmlFor="subject" className="formLabel">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
          
              placeholder="How can we help you"
              className="formInput mt-1"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="formLabel">
              Your message
            </label>
            <textarea
              rows="6"
              type="text"
              id="message"
              name="message"
           
              placeholder="Describe your issue...."
              className="formInput mt-1"
            />
          </div>
          <button className="btn rounded sm:w-fit">
          <Link
                  to="/home"
                  className="S font-medium ml-1"
                >
                  {" "}
                  Submit
                </Link>
            
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
