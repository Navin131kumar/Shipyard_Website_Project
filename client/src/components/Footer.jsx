import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 sm:px-[10%] bg-[url(https://ik.imagekit.io/jjyo3gsee/img/map%20(1).png?updatedAt=1740134338837)]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Address Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Address</h3>
          <p className="flex items-center gap-2"><span>&#x1F4CD;</span> No.10,Ravipuram,,Ernakulam,Kerala</p>
          <p className="flex items-center gap-2"><span>&#x260E;</span> 6374667378</p>
          <p className="flex items-center gap-2"><span>&#x2709;</span> Navin2004@gmail.com</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-gray-600">
              <FaTwitter className="text-white" />
            </a>
            <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-gray-600">
              <FaFacebookF className="text-white" />
            </a>
            <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-gray-600">
              <FaLinkedinIn className="text-white" />
            </a>
          </div>
        </div>

        {/* Services Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            <li>&#9654; Air Freight</li>
            <li>&#9654; Sea Freight</li>
            <li>&#9654; Road Freight</li>
            <li>&#9654; Logistic Solutions</li>
            <li>&#9654; Industry Solutions</li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>&#9654; About Us</li>
            <li>&#9654; Contact Us</li>
            <li>&#9654; Our Services</li>
            <li>&#9654; Terms & Condition</li>
            <li>&#9654; Support</li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
          <p className="text-gray-400">Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
          <div className="flex mt-4">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 w-full bg-gray-800 text-white rounded-l-md focus:outline-none"
            />
            <button className="px-4 py-2 bg-[#FF6600] text-white rounded-r-md hover:bg-red-600">
              SignUp
            </button>
          </div>
        </div>
      </div>

      <hr className="border-gray-700 my-6" />
      <div className="flex justify-between items-center text-gray-400 text-sm">
        <p>&copy; Your Site Name, All Rights Reserved.</p>
        <p>Designed By HTML Codex</p>
      </div>

      {/* Scroll to top button */}
      <button className="fixed bottom-4 right-4 p-3 bg-[#FF6600] rounded-full text-white hover:bg-red-600">
        &#x2B06;
      </button>
    </footer>
  );
}
