import React from "react";
// a contact form with fields for a name, an email address, and a message
// add error notification if invalid email address entered

const Contact = () => {
  return (
    <div className="bg-base-100 p-6 flex flex-col justify-center items-center">
      <form className="bg-base-200 py-5 px-5">
        <div className="grid grid-cols-2 gap-4 ">
          <div className="flex flex-col">
            <label htmlFor="first-name">First name</label>
            <input
              type="text"
              id="first-name"
              name="first-name"
              placeholder="First Name"
              className="form-input px-3 py-2 rounded-md"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="last-name">Last name</label>
            <input
              type="text"
              id="last-name"
              name="last-name"
              placeholder="Last Name"
              className="form-input px-3 py-2 rounded-md"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="form-input px-3 py-2 rounded-md"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone">
              <div className="flex align-items">
                Phone
                <span className="ml-auto opacity-75">Optional</span>
              </div>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone"
              className="form-input px-3 py-2 rounded-md"
            />
          </div>
          <div className="flex flex-col col-span-2">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="form-input px-3 py-2 rounded-md"
              required
            />
          </div>
          <div className="flex flex-col col-span-2">
            <label htmlFor="subject">
              <div className="flex align-items">
                Message
                <span className="ml-auto opacity-75">Max. 500 characters</span>
              </div>
            </label>
            <textarea
              maxLength="500"
              rows="4"
              type="text"
              id="subject"
              name="subject"
              className="form-input px-3 py-2 rounded-md"
              required
            />
          </div>
        </div>
        <div className="flex justify-end py-4">
          <button
            type="submit"
            class="btn rounded-full btn-secondary border-none"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;