import React, { useState } from 'react';
import linkedin from "../assets/linkedin.svg";
import { useAuth } from "../storage/Auth";

const Contact = () => {

  document.title = "NimbusBook - Contact"

  const { user } = useAuth();

  const [contact, setContact] = useState({
    name: user.fullName,
    email: user.email,
    message: ""
  });

  const handleContactInput = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setContact({
      ...contact,
      [name]: value,
    });
  }

  return (
    <div className='pt-[5rem]'>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-8 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Please get in touch</p>
          </div>
          <form method="post">
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className='flex flex-col md:flex-row w-full'>
                  <div className="p-2 w-full md:w-1/2">
                    <div className="relative w-full">
                      <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
                      <input onChange={handleContactInput} value={contact.name} type="text" id="name" placeholder='Enter your name' name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                  </div>
                  <div className="p-2 w-full md:w-1/2">
                    <div className="relative w-full">
                      <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                      <input onChange={handleContactInput} value={contact.email} type="text" placeholder='Enter your email' id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label for="message" className="leading-7 text-sm text-gray-600">Message</label>
                    <textarea onChange={handleContactInput} value={contact.message} id="message" placeholder='Enter your message' name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-700 transition-all duration-300 ease-in-out rounded-lg text-lg">Send  </button>
                </div>
                <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                  <span>E-mail : </span><a className="text-indigo-500" href="mailto:kartik2611mishra@gmail.com">kartik2611mishra@gmail.com</a>
                  <p className="leading-normal my-5">AB road
                    <br />Rajendra Nagar, Indore 452012
                  </p>
                  <span className="inline-flex">
                    <a href='https://www.linkedin.com/in/kartikmishra2004' target='_blank' className="text-gray-500">
                      <img className='w-6' src={linkedin} alt="l" />
                    </a>
                    <a href='https://x.com/kartikmishra01_' target='_blank' className="ml-4 text-gray-500">
                      <svg fill="currentColor" stroke-linecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a href='https://www.instagram.com/kartikk26_' target='_blank' className="ml-4 text-gray-500">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div >
  )
}

export default Contact
