// import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-100 flex flex-col">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-16 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Welcome to Eventify</h1>
          <p className="text-lg sm:text-xl mb-8">
            Your all-in-one solution for managing events effortlessly. Plan, organize, and execute events with ease!
          </p>
          {/* <a href="/login"> */}
          <a href="/create-event">
            <button className="px-8 py-4 bg-white text-blue-500 font-semibold rounded-lg shadow-lg hover:bg-gray-200">
              Get Started
            </button>
          </a>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Features We Offer</h2>
          <p className="text-gray-600 mb-12">
            From adding attendees to scheduling events, we have got you covered.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature Cards */}
            {[
              { title: "Add Attendees", icon: "👥" },
              { title: "Sponsors Management", icon: "🤝" },
              { title: "Mentors & Speakers", icon: "🎤" },
              { title: "View Attendance", icon: "📊" },
              { title: "Event Schedule", icon: "🗓️" },
              { title: "Food & Catering", icon: "🍴" },
              { title: "About Us", icon: "ℹ️" },
              { title: "Contact Support", icon: "📞" },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-8 bg-blue-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">What Our Users Say</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "John Doe",
                feedback:
                  "Eventify made organizing my conference a breeze. Highly recommend!",
              },
              {
                name: "Jane Smith",
                feedback: "I love how easy it is to manage attendees and sponsors.",
              },
              {
                name: "Alice Johnson",
                feedback:
                  "The event schedule feature saved me so much time. Great app!",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow"
              >
                <p className="italic text-gray-600 mb-4">
                  `{testimonial.feedback}`
                </p>
                <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            Ready to make your next event a success?
          </h2>
          <p className="text-lg mb-8">
            Join thousands of users who trust Eventify to organize their events.
          </p>
          <a href="/login">
            <button className="px-8 py-4 bg-white text-purple-500 font-semibold rounded-lg shadow-lg hover:bg-gray-200">
              Create an Event
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
