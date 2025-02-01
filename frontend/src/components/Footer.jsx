const Footer = () => {
    return (
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="container mx-auto text-center space-y-4">
          <p className="text-lg font-semibold">Event Organizer</p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              Twitter
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition"
            >
              Instagram
            </a>
            <a
              href="/privacy-policy"
              rel="noopener noreferrer"
              className="hover:text-black-500 transition"
            >
              Privacy-Policy
            </a>
          </div>
          <div className="mt-10 text-center">
            <p className="text-gray-500">
              © {new Date().getFullYear()} Your Company Name. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  