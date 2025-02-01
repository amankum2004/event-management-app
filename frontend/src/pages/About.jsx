const About = () => {
    return (
      <div className="bg-gradient-to-b from-blue-100 to-purple-50 min-h-screen py-12">
        <div className="container mx-auto px-6">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
              About Us
            </h1>
            <p className="text-lg text-gray-600">
              Learn more about our mission, vision, and what drives us to create
              amazing events for you.
            </p>
          </div>
  
          {/* Content Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Who We Are
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We are a passionate team dedicated to providing seamless event
                management solutions. Our platform allows organizers to plan and
                execute events effortlessly, ensuring a memorable experience for
                all participants.
              </p>
              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600 leading-relaxed">
                To empower event organizers with innovative tools and features
                that simplify the planning process while delivering outstanding
                experiences to attendees.
              </p>
            </div>
  
            {/* Right Column */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa"
                alt="About Us"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
  
          {/* Features Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
              Why Choose Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white shadow-lg rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Seamless Management
                </h3>
                <p className="text-gray-600">
                  Manage sponsors, mentors, schedules, attendees, and more with
                  ease using our user-friendly platform.
                </p>
              </div>
              <div className="p-6 bg-white shadow-lg rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Real-Time Updates
                </h3>
                <p className="text-gray-600">
                  Stay updated with live changes and ensure everything is on track
                  during your event.
                </p>
              </div>
              <div className="p-6 bg-white shadow-lg rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Dedicated Support
                </h3>
                <p className="text-gray-600">
                  Our team is always here to assist you with any questions or
                  challenges you may face.
                </p>
              </div>
            </div>
          </div>
  
          {/* CTA Section */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Organize Your Next Event?
            </h2>
            <p className="text-gray-600 mb-6">
              Join us today and experience the difference!
            </p>
            <a
              href="/details"
              className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;
  