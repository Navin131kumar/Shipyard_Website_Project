import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="sm:px-[10%] px-6 pt-28 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-3">
            <div>
              <p className="text-[16px] font-[poppins] font-bold text-[#51cfed]">
                Get in Touch
              </p>
            </div>
            <div>
              <p className="font-[poppins] text-[40px] font-bold">
                Contact For Any Query
              </p>
            </div>
            <div>
              <form
                action=""
                className="border flex flex-col gap-5 p-5 bg-gray-200"
              >
                <div className="flex gap-3 border w-full justify-between">
                  <div className="flex flex-col gap-3">
                    <label htmlFor="name" className="font-[poppins] ">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="border-gray-300 rounded-md border-2 w-full pl-3 pr-10  py-2"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label htmlFor="name" className="font-[poppins] ">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="name"
                      className="border-gray-300 rounded-md border-2 w-full pl-3 pr-10  py-2"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <label htmlFor="name" className="font-[poppins] ">
                    Subject
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="name"
                    className="border-gray-300 rounded-md border-2 w-full pl-3 pr-10  py-3"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label htmlFor="message" className="font-[poppins] ">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    className="border-black w-full px-10 py-5"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-500 text-white font-semibold py-3 rounded-md hover:bg-red-600 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="w-full">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1006019.1371046335!2d75.06953217812499!3d9.953728299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0873536dd8e143%3A0xe534b506a0f4b4a0!2sCochin%20Shipyard%20Hull%20Shop!5e0!3m2!1sen!2sin!4v1740154202354!5m2!1sen!2sin" className="w-full h-full" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
