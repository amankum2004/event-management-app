// import React from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const fieldsMap = {
    "Sponsors Management": [
      { label: "Name", type: "text", name: "sponsorName" },
      { label: "Image URL", type: "url", name: "sponsorImage" },
      { label: "About", type: "textarea", name: "sponsorAbout" },
    ],
    "Mentors & Speakers": [
      { label: "Name", type: "text", name: "mentorName" },
      { label: "Profession", type: "text", name: "mentorProfession" },
      { label: "Image URL", type: "url", name: "mentorImage" },
    ],
    "Event Schedule": [
      { label: "Event Title", type: "text", name: "eventTitle" },
      { label: "Event Time", type: "datetime-local", name: "eventTime" },
      { label: "Event Venue", type: "text", name: "eventVenue" },
      { label: "Event Code", type: "text", name: "eventCode" },
    ],
    "Food & Catering": [
      { label: "Cuisine Type", type: "text", name: "cuisineType" },
      { label: "Menu Details", type: "textarea", name: "menuDetails" },
      { label: "Cost per Person", type: "number", name: "costPerPerson" },
    ],
    "Add Attendees": [
      { label: "Upload Attendees File (Excel/CSV)", type: "file", name: "attendeesFile" },
      { label: "Open for All", type: "checkbox", name: "openForAll" },
    ],
    "About Us":[
        { label: "About", type: "textarea", name: "sponsorAbout" },
    ],
    "Contact Support": [
      { label: "Name", type: "text", name: "contactName" },
      { label: "Email", type: "email", name: "contactEmail" },
      { label: "Phone", type: "tel", name: "contactPhone" },
    ],
    "Upload Images": [
        { label: "Upload Images", type: "file", name: "uploadedImages", multiple: true },
    ],
  };

// const DetailsPage = () => {
//     const { state } = useLocation();
//     const selectedOptions = state?.selectedOptions || [];
  
//     const [formData, setFormData] = useState({});
  
//     const handleInputChange = (e, option, fieldName) => {
//       const value = e.target.type === "file" ? e.target.files[0] : e.target.value;
//       const isChecked = e.target.type === "checkbox" ? e.target.checked : null;
//       setFormData((prev) => ({
//         ...prev,
//         [option]: {
//           ...prev[option],
//           [fieldName]: e.target.type === "checkbox" ? isChecked : value,
//         },
//       }));
//     };
  
//     const handleSubmit = (e) => {
//       e.preventDefault();
//       console.log("Submitted Data:", formData);
//       alert("Details submitted successfully!");
//     };
  
//     return (
//       <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-100 p-8">
//         <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
//           <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
//             Fill Details for Selected Options
//           </h1>
//           <form className="space-y-8" onSubmit={handleSubmit}>
//             {selectedOptions.map((option) => (
//               <div key={option} className="space-y-4">
//                 <h2 className="text-2xl font-semibold text-gray-800">{option}</h2>
//                 {(fieldsMap[option] || []).map((field, index) => (
//                   <div key={index} className="space-y-2">
//                     <label
//                       className="block text-sm font-medium text-gray-700"
//                       htmlFor={`${option}-${field.name}`}
//                     >
//                       {field.label}
//                     </label>
//                     {field.type === "textarea" ? (
//                       <textarea
//                         id={`${option}-${field.name}`}
//                         name={field.name}
//                         className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
//                         placeholder={`Enter ${field.label}`}
//                         rows={4}
//                         onChange={(e) =>
//                           handleInputChange(e, option, field.name)
//                         }
//                       ></textarea>
//                     ) : field.type === "file" ? (
//                       <input
//                         id={`${option}-${field.name}`}
//                         name={field.name}
//                         type={field.type}
//                         className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border file:border-gray-300 file:text-gray-700 hover:file:bg-gray-100"
//                         onChange={(e) =>
//                           handleInputChange(e, option, field.name)
//                         }
//                       />
//                     ) : field.type === "checkbox" ? (
//                       <div className="flex items-center">
//                         <input
//                           id={`${option}-${field.name}`}
//                           name={field.name}
//                           type="checkbox"
//                           className="w-5 h-5 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
//                           onChange={(e) =>
//                             handleInputChange(e, option, field.name)
//                           }
//                         />
//                         <label
//                           htmlFor={`${option}-${field.name}`}
//                           className="ml-2 block text-sm text-gray-700"
//                         >
//                           {field.label}
//                         </label>
//                       </div>
//                     ) : (
//                       <input
//                         id={`${option}-${field.name}`}
//                         name={field.name}
//                         type={field.type}
//                         className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
//                         placeholder={`Enter ${field.label}`}
//                         onChange={(e) =>
//                           handleInputChange(e, option, field.name)
//                         }
//                       />
//                     )}
//                   </div>
//                 ))}
//               </div>
//             ))}
//             <div className="text-center">
//               <button
//                 type="submit"
//                 className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition"
//               >
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//   };
  
//   export default DetailsPage;

const DetailsPage = () => {
    const { state } = useLocation();
    const selectedOptions = state?.selectedOptions || [];
    const [formData, setFormData] = useState({});
  
    const handleInputChange = (e, option, fieldName) => {
      const value = e.target.type === "file" ? Array.from(e.target.files) : e.target.value;
      const isChecked = e.target.type === "checkbox" ? e.target.checked : null;
  
      setFormData((prev) => ({
        ...prev,
        [option]: {
          ...prev[option],
          [fieldName]: e.target.type === "checkbox" ? isChecked : value,
        },
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Submitted Data:", formData);
      alert("Details submitted successfully!");
    };
  
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-100 p-8">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
            Fill Details for Selected Options
          </h1>
          <form className="space-y-8" onSubmit={handleSubmit}>
            {selectedOptions.map((option) => (
              <div key={option} className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800">{option}</h2>
                {(fieldsMap[option] || []).map((field, index) => (
                  <div key={index} className="space-y-2">
                    <label
                      className="block text-sm font-medium text-gray-700"
                      htmlFor={`${option}-${field.name}`}
                    >
                      {field.label}
                    </label>
                    {field.type === "textarea" ? (
                      <textarea
                        id={`${option}-${field.name}`}
                        name={field.name}
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder={`Enter ${field.label}`}
                        rows={4}
                        onChange={(e) => handleInputChange(e, option, field.name)}
                      ></textarea>
                    ) : field.type === "file" ? (
                      <input
                        id={`${option}-${field.name}`}
                        name={field.name}
                        type="file"
                        className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border file:border-gray-300 file:text-gray-700 hover:file:bg-gray-100"
                        multiple={field.multiple}
                        onChange={(e) => handleInputChange(e, option, field.name)}
                      />
                    ) : (
                      <input
                        id={`${option}-${field.name}`}
                        name={field.name}
                        type={field.type}
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder={`Enter ${field.label}`}
                        onChange={(e) => handleInputChange(e, option, field.name)}
                      />
                    )}
                  </div>
                ))}
                {option === "Upload Images" && formData[option]?.uploadedImages?.length > 0 && (
                  <div className="mt-4 grid grid-cols-3 gap-4">
                    {formData[option].uploadedImages.map((file, index) => (
                      <div key={index} className="border rounded-lg overflow-hidden">
                        <img
                          src={URL.createObjectURL(file)}
                          alt={`Uploaded ${index + 1}`}
                          className="object-cover w-full h-32"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default DetailsPage;
