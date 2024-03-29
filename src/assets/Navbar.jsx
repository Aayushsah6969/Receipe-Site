import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const Navbar = () => {
  const ref = useRef(null);

  // Function to simulate loading progress
  const simulateLoading = () => {
    ref.current.continuousStart();
    setTimeout(() => {
      ref.current.complete();
    }, 1000); // Simulating 1 second of loading time
  };

  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-green-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">AS Kitchen</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            {/* Add LoadingBar here */}
            {/* <LoadingBar color="#f11946" ref={ref} /> */}
            <LoadingBar color="#00ff00" ref={ref} />

            <Link
              className="mr-5 hover:text-gray-900"
              to="/"
              onClick={simulateLoading} // Trigger loading simulation on link click
            >
              Home
            </Link>
            <Link
              className="mr-5 hover:text-gray-900"
              to="/feature"
              onClick={simulateLoading}
            >
              Tutorials
            </Link>
            <Link
              className="mr-5 hover:text-gray-900"
              to="/sample"
              onClick={simulateLoading}
            >
              Sample
            </Link>
             
            <Link
              className="mr-5 hover:text-gray-900"
              to="/testimonial"
              onClick={simulateLoading}
            >
              Testimonial
            </Link>
            <Link className="mr-5 hover:text-gray-900"to="/contact"onClick={simulateLoading}>Contact</Link>
          </nav>
          <Link to="/products" onClick={simulateLoading} className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
  Explore
  <svg
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    className="w-4 h-4 ml-1"
    viewBox="0 0 24 24"
  >
    <path d="M5 12h14M12 5l7 7-7 7"></path>
  </svg>
</Link>

        </div>
      </header>
      <hr />
    </>
  );
};

export default Navbar;
