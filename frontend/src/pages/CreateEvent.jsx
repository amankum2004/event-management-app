import { useState } from "react";
import { useNavigate } from "react-router-dom";

const EventPage = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);
  const [formData, setFormData] = useState({
    eventName: "",
    profession: "",
    email: "",
    mobile: "",
    eventCode: "",
  });

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedOption === "createEvent") {
      console.log("Event Created:", formData);
      alert("Event created successfully!");
    } else if (selectedOption === "eventInfo") {
      console.log("Event Info Request:", formData.eventCode);
      alert("Event information retrieved!");
    }
    navigate("/feature-selection")
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-100 to-purple-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Event Management
        </h2>

        {/* Options Selection */}
        <div className="space-y-6">
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => handleOptionChange("createEvent")}
              className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition"
            >
              Create a New Event
            </button>
            <button
              onClick={() => handleOptionChange("eventInfo")}
              className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-lg hover:bg-green-600 transition"
            >
              Info About Scheduled Event
            </button>
          </div>

          {selectedOption && (
            <form
              onSubmit={handleSubmit}
              className="mt-8 bg-white shadow-lg rounded-lg p-8 space-y-6"
            >
              {/* Fields for Create Event */}
              {selectedOption === "createEvent" && (
                <>
                  <h3 className="text-2xl font-semibold text-gray-800 text-center">
                    Create New Event
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="eventName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Name
                      </label>
                      <input
                        id="eventName"
                        name="eventName"
                        type="text"
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Enter event name"
                        onChange={handleInputChange}
                        value={formData.eventName}
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="profession"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Profession
                      </label>
                      <input
                        id="profession"
                        name="profession"
                        type="text"
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Enter your profession"
                        onChange={handleInputChange}
                        value={formData.profession}
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Enter email"
                        onChange={handleInputChange}
                        value={formData.email}
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="mobile"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Mobile Number
                      </label>
                      <input
                        id="mobile"
                        name="mobile"
                        type="tel"
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Enter mobile number"
                        onChange={handleInputChange}
                        value={formData.mobile}
                        required
                      />
                    </div>
                  </div>
                </>
              )}

              {/* Fields for Event Info */}
              {selectedOption === "eventInfo" && (
                <>
                  <h3 className="text-2xl font-semibold text-gray-800 text-center">
                    Event Information
                  </h3>
                  <div>
                    <label
                      htmlFor="eventCode"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Event Code (Unique)
                    </label>
                    <input
                      id="eventCode"
                      name="eventCode"
                      type="text"
                      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Enter your unique event code"
                      onChange={handleInputChange}
                      value={formData.eventCode}
                      required
                    />
                  </div>
                </>
              )}

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg shadow-lg hover:bg-purple-600 transition"
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventPage;
