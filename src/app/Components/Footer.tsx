const Footer = () => {
    return (
      <footer className="bg-gray-800 py-6">
        <div className="container mx-auto px-4 h-32 text-sm text-white">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Left Section */}
            <div className="mb-4 md:mb-0">
              <p>&copy; {new Date().getFullYear()} eBay Inc. All Rights Reserved.</p>
            </div>
  
            {/* Right Section */}
            <div className="flex space-x-4">
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
              <a href="#" className="hover:underline">
                User Agreement
              </a>
              <a href="#" className="hover:underline">
                Accessibility
              </a>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  