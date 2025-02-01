const Services = () => {
    const services = [
      {
        title: 'Event Planning',
        description: 'Comprehensive event planning, from concept to execution, tailored to your needs.',
        price: '$500 - $2000',
        icon: '📅',
      },
      {
        title: 'Catering Services',
        description: 'Delicious catering options with customizable menus for your event, large or small.',
        price: '$300 - $1500',
        icon: '🍽️',
      },
      {
        title: 'Venue Decoration',
        description: 'Transform any venue with exquisite decorations that fit your event’s theme.',
        price: '$400 - $2500',
        icon: '🎨',
      },
      {
        title: 'Photography & Videography',
        description: 'Capture every moment with professional photography and videography services.',
        price: '$700 - $3000',
        icon: '📸',
      },
      {
        title: 'Entertainment',
        description: 'Live bands, DJs, and entertainers to keep your guests engaged and entertained.',
        price: '$500 - $2500',
        icon: '🎤',
      },
      {
        title: 'Transportation',
        description: 'Luxury transportation services to ensure your guests travel in comfort.',
        price: '$200 - $1200',
        icon: '🚗',
      },
    ];
  
    return (
      <div className="min-h-screen bg-gradient-to-b from-indigo-100 to-purple-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-2xl"
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                  <p className="text-lg font-semibold text-gray-800">{service.price}</p>
                  <div className="mt-6">
                    <button
                      className="w-full px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition"
                      onClick={() => alert(`You selected ${service.title}`)}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Services;
  