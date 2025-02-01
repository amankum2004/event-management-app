// import React, { useState } from "react";
// import { useState } from "react";

// const SelectionPage = () => {
//   const options = [
//     { id: 1, label: "Add Attendees" },
//     { id: 2, label: "Sponsors" },
//     { id: 3, label: "Mentors" },
//     { id: 4, label: "View Attendance" },
//     { id: 5, label: "About Us" },
//     { id: 6, label: "Contact" },
//     { id: 7, label: "Event Schedule" },
//     { id: 8, label: "Food" },
//   ];

//   const [enabledOptions, setEnabledOptions] = useState([]);

//   const toggleOption = (id) => {
//     if (enabledOptions.includes(id)) {
//       setEnabledOptions(enabledOptions.filter((optionId) => optionId !== id));
//     } else {
//       setEnabledOptions([...enabledOptions, id]);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-8">
//       <h1 className="text-3xl font-bold mb-6 text-gray-800">Organiser Options</h1>
//       <p className="text-gray-600 mb-8 text-center">
//         Select the options you would like to enable for your event. You can toggle them on or off.
//       </p>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {options.map((option) => (
//           <button
//             key={option.id}
//             onClick={() => toggleOption(option.id)}
//             className={`w-full px-6 py-4 text-lg font-medium rounded-lg shadow-lg transition-transform transform ${
//               enabledOptions.includes(option.id)
//                 ? "bg-green-500 text-white hover:scale-105"
//                 : "bg-gray-200 text-gray-500 hover:bg-gray-300 hover:scale-105"
//             }`}
//           >
//             {option.label}
//           </button>
//         ))}
//       </div>

//       <div className="mt-10">
//         <h2 className="text-xl font-semibold mb-4 text-gray-700">Selected Options</h2>
//         {enabledOptions.length > 0 ? (
//           <ul className="list-disc list-inside text-gray-600">
//             {options
//               .filter((option) => enabledOptions.includes(option.id))
//               .map((option) => (
//                 <li key={option.id}>{option.label}</li>
//               ))}
//           </ul>
//         ) : (
//           <p className="text-gray-500 italic">No options selected.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SelectionPage;


// import { useNavigate } from "react-router-dom";
// import { useState } from "react";

// const SelectionPage = () => {
//   const navigate = useNavigate();
//   const [selectedOptions, setSelectedOptions] = useState([]);

//   const options = [
//     "Add Attendees",
//     "Sponsors Management",
//     "Mentors & Speakers",
//     // "View Attendance",
//     "Event Schedule",
//     "Food & Catering",
//     "About Us",
//     "Contact Support",
//     "Upload Images"
//   ];

//   const handleOptionToggle = (option) => {
//     if (selectedOptions.includes(option)) {
//       setSelectedOptions(selectedOptions.filter((item) => item !== option));
//     } else {
//       setSelectedOptions([...selectedOptions, option]);
//     }
//   };

//   const handleNext = () => {
//     navigate("/feature-details", { state: { selectedOptions } });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-100 p-8">
//       <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
//         <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
//           Select Options for Your Event
//         </h1>
//         <div className="grid grid-cols-2 gap-4">
//           {options.map((option, index) => (
//             <button
//               key={index}
//               className={`w-full px-6 py-4 text-lg font-medium rounded-lg shadow-lg transition-transform transform ${
//                 selectedOptions.includes(option)
//                   ? "bg-green-500 text-white hover:scale-105"
//                   : "bg-gray-200 text-gray-500 hover:bg-gray-300 hover:scale-105"
//               }`}
//               onClick={() => handleOptionToggle(option)}
//             >
//               {option}
//             </button>
//           ))}
//         </div>
//         <div className="mt-6 text-center">
//           <button
//             className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition"
//             onClick={handleNext}
//             disabled={selectedOptions.length === 0}
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SelectionPage;

// import { useNavigate } from "react-router-dom";
// import { useState } from "react";

// const SelectionPage = () => {
//   const navigate = useNavigate();
//   const [selectedOptions, setSelectedOptions] = useState({});
//   const [hoveredOption, setHoveredOption] = useState(null);

//   const options = [
//     { name: "Add Attendees", description: "Choose the attendees you need: students, faculties, stalls, etc." },
//     { name: "Sponsors Management", description: "Manage sponsors for your event, track their details and contribution." },
//     { name: "Mentors & Speakers", description: "Manage the list of mentors and speakers for your event." },
//     { name: "Event Schedule", description: "Create and manage event schedules including time slots and activities." },
//     { name: "Food & Catering", description: "Manage catering requirements, including food preferences and quantity." },
//     { name: "About Us", description: "Provide details about the event or organization hosting the event." },
//     { name: "Contact Support", description: "Contact support for assistance with event management." },
//     { name: "Upload Images", description: "Upload images related to the event like posters, photos, etc." },
//   ];

//   const handleOptionToggle = (option) => {
//     setSelectedOptions((prevSelected) => ({
//       ...prevSelected,
//       [option]: prevSelected[option] ? prevSelected[option] : 1,
//     }));
//   };

//   const handleQuantityChange = (option, delta) => {
//     setSelectedOptions((prevSelected) => {
//       const newCount = prevSelected[option] + delta;
//       return newCount <= 0 ? prevSelected : { ...prevSelected, [option]: newCount };
//     });
//   };

//   const handleNext = () => {
//     navigate("/feature-details", { state: { selectedOptions } });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-100 p-8">
//       <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
//         <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
//           Select Options for Your Event
//         </h1>
//         <div className="grid grid-cols-2 gap-4">
//           {options.map((option, index) => (
//             <div
//               key={index}
//               className="relative"
//               onMouseEnter={() => setHoveredOption(option.name)}
//               onMouseLeave={() => setHoveredOption(null)}
//             >
//               <button
//                 className={`w-full px-6 py-4 text-lg font-medium rounded-lg shadow-lg transition-transform transform ${
//                   selectedOptions[option.name]
//                     ? "bg-green-500 text-white hover:scale-105"
//                     : "bg-gray-200 text-gray-500 hover:bg-gray-300 hover:scale-105"
//                 }`}
//                 onClick={() => handleOptionToggle(option.name)}
//               >
//                 {option.name}
//               </button>
//               {/* Plus/Minus Buttons for Selectable Options */}
//               {option.name === "Add Attendees" && selectedOptions[option.name] && (
//                 <div className="absolute top-1 right-4 flex space-x-2">
//                   <button
//                     className="text-gray-600 font-semibold"
//                     onClick={() => handleQuantityChange(option.name, 1)}
//                   >
//                     +
//                   </button>
//                   <span className="text-gray-800">{selectedOptions[option.name]}</span>
//                   <button
//                     className="text-gray-600 font-semibold"
//                     onClick={() => handleQuantityChange(option.name, -1)}
//                   >
//                     -
//                   </button>
//                 </div>
//               )}
//               {/* Hover Pop-up for Description */}
//               {hoveredOption === option.name && (
//                 <div className="absolute left-0 bottom-full mb-2 w-64 bg-gray-700 text-white text-sm p-3 rounded-md shadow-lg">
//                   {option.description}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//         <div className="mt-6 text-center">
//           <button
//             className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition"
//             onClick={handleNext}
//             disabled={Object.keys(selectedOptions).length === 0}
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SelectionPage;



import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SelectionPage = () => {
  const navigate = useNavigate();
  const [selectedOptions, setSelectedOptions] = useState({});
  const [hoveredOption, setHoveredOption] = useState(null);
  const [customInputs, setCustomInputs] = useState({}); // To track custom "Other" inputs

  // Features & their related persons
  const options = [
    {
      name: "Add Attendees",
      description: "Choose the types of attendees for your event.",
      persons: ["Students", "Faculties", "Exhibitors", "VIP Guests"],
    },
    {
      name: "Sponsors Management",
      description: "Manage event sponsors and their contributions.",
      persons: ["Corporate", "Local Businesses", "Media Partners"],
    },
    {
      name: "Mentors & Speakers",
      description: "Select keynote speakers and industry mentors.",
      persons: ["Tech Experts", "Entrepreneurs", "Motivational Speakers"],
    },
    {
      name: "Event Schedule",
      description: "Organize and manage event schedules.",
      persons: ["Event Planner", "Time Keeper"],
    },
    {
      name: "Food & Catering",
      description: "Manage catering services.",
      persons: ["Caterers", "Beverage Suppliers"],
    },
  ];

  // Toggle selection of a predefined person
  const togglePersonSelection = (optionName, person) => {
    setSelectedOptions((prev) => {
      const prevSelected = prev[optionName] || [];
      const isAlreadySelected = prevSelected.includes(person);

      return {
        ...prev,
        [optionName]: isAlreadySelected
          ? prevSelected.filter((p) => p !== person)
          : [...prevSelected, person],
      };
    });
  };

  // Handle "Other" input field changes
  const handleCustomInputChange = (optionName, value) => {
    setCustomInputs({ ...customInputs, [optionName]: value });
  };

  // Add custom input to selected persons when Enter is pressed
  const handleCustomInputSubmit = (optionName) => {
    const customValue = customInputs[optionName]?.trim();
    if (customValue) {
      setSelectedOptions((prev) => ({
        ...prev,
        [optionName]: [...(prev[optionName] || []), customValue],
      }));
      setCustomInputs({ ...customInputs, [optionName]: "" });
    }
  };

  const handleNext = () => {
    navigate("/feature-details", { state: { selectedOptions } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-100 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Select Features & Participants
        </h1>
        <div className="grid grid-cols-2 gap-4">
          {options.map((option, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setHoveredOption(option.name)}
              onMouseLeave={() => setHoveredOption(null)}
            >
              {/* Feature Button */}
              <button
                className={`w-full px-6 py-4 text-lg font-medium rounded-lg shadow-lg transition-transform transform ${
                  selectedOptions[option.name]?.length
                    ? "bg-green-500 text-white hover:scale-105"
                    : "bg-gray-200 text-gray-500 hover:bg-gray-300 hover:scale-105"
                }`}
              >
                {option.name}
              </button>

              {/* Hover Pop-up: List of People + Other Input */}
              {hoveredOption === option.name && (
                <div className="absolute left-0 bottom-full mb-2 w-64 bg-gray-800 text-white text-sm p-3 rounded-lg shadow-lg">
                  <p className="font-semibold mb-2">{option.description}</p>
                  <ul>
                    {option.persons.map((person) => (
                      <li
                        key={person}
                        className="flex items-center justify-between px-2 py-1 hover:bg-gray-700 rounded cursor-pointer"
                        onClick={() => togglePersonSelection(option.name, person)}
                      >
                        <span>{person}</span>
                        {selectedOptions[option.name]?.includes(person) && (
                          <span className="text-green-400 font-bold">✓</span>
                        )}
                      </li>
                    ))}
                    {/* Other Option */}
                    <li className="px-2 py-1">
                      <input
                        type="text"
                        placeholder="Other (Type & Press Enter)"
                        className="w-full px-2 py-1 bg-gray-900 text-white rounded border border-gray-600 outline-none"
                        value={customInputs[option.name] || ""}
                        onChange={(e) => handleCustomInputChange(option.name, e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") handleCustomInputSubmit(option.name);
                        }}
                      />
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Next Button */}
        <div className="mt-6 text-center">
          <button
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition"
            onClick={handleNext}
            disabled={Object.keys(selectedOptions).length === 0}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectionPage;



