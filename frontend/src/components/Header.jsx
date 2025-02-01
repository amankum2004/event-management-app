const Header = () => {
    return (
      <header className="bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-bold">Event Organizer</h1>
          <nav className="flex space-x-6">
            <a href="/" className="hover:text-yellow-300 transition">
              Home
            </a>
            <a href="/about" className="hover:text-yellow-300 transition">
              About
            </a>
            <a href="/contact" className="hover:text-yellow-300 transition">
              Contact
            </a>
            <a href="/services" className="hover:text-yellow-300 transition">
              Services
            </a>
            <a href="/login" className="hover:text-yellow-300 transition">
              Login
            </a>
          </nav>
        </div>
      </header>
    );
  };
  
  export default Header;
  