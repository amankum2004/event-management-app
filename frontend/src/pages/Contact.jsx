const Contact = () => {
    return (
      <div className="bg-gradient-to-b from-blue-100 to-purple-50 min-h-screen py-12">
        <div className="container mx-auto px-6">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Contact Us</h1>
            <p className="text-lg text-gray-600">
              We are here to help you with any questions or support you need.
              Reach out to us, and we will get back to you as soon as possible!
            </p>
          </div>
  
          {/* Contact Form Section */}
          <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              Get in Touch
            </h2>
            <form className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="contactName">
                  Your Name
                </label>
                <input
                  type="text"
                  id="contactName"
                  name="contactName"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your full name"
                  required
                />
              </div>
  
              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="contactEmail">
                  Your Email
                </label>
                <input
                  type="email"
                  id="contactEmail"
                  name="contactEmail"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
  
              {/* Phone Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="contactPhone">
                  Your Phone Number
                </label>
                <input
                  type="tel"
                  id="contactPhone"
                  name="contactPhone"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
  
              {/* Message Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="contactMessage">
                  Your Message
                </label>
                <textarea
                  id="contactMessage"
                  name="contactMessage"
                  rows="5"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Type your message here"
                  required
                ></textarea>
              </div>
  
              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
  
          {/* Contact Info Section */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Our Office</h3>
                <p className="text-gray-600">123 Event Street, City, Country</p>
                <p className="text-gray-600">Mon-Fri, 9 AM - 6 PM</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Get In Touch</h3>
                <p className="text-gray-600">Phone: (123) 456-7890</p>
                <p className="text-gray-600">Email: support@eventapp.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Contact;
  