import { useState } from "react";
import Details from "./form/Details";
import Skills from "./form/Skills"; // import other components similarly
import Experience from "./form/Experience";
import Education from "./form/Education";
import Projects from "./form/Projects";
import Hobbies from "./form/Hobbies";
import Options from "./Options";
import { Link } from "react-router-dom";

function UserData() {
  const optionsArr = [
    "Details",
    "Skills",
    "Experience",
    "Education",
    "Projects",
    "Hobbies",
  ];

  // Mapping of string options to components
  const optionComponents = {
    Details: <Details />,
    Skills: <Skills />,
    Experience: <Experience />,
    Education: <Education />,
    Projects: <Projects />,
    Hobbies: <Hobbies />,
  };

  const [selectedOption, setSelectedOption] = useState(0);

  const handleNext = () => {
    setSelectedOption((prevIndex) =>
      prevIndex < optionsArr.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const handleSubmit = () => {
    console.log("Form Submitted");
    // Perform form submission logic here (e.g., API call)
  };

  return (
    <div className="flex flex-col lg:flex-row w-full">
      {/* Sidebar */}
      <div className="w-full lg:w-1/3  p-4 lg:h-screen">
        <Options
          options={optionsArr}
          selectedOption={optionsArr[selectedOption]}
          onOptionSelect={(index) => setSelectedOption(index)}
        />
      </div>

      {/* Main Content */}
      <div className="w-full border-2 border-black h-auto p-10 lg:p-6 rounded-md   ">
        {/* Render the corresponding component based on the selected option */}
        {optionComponents[optionsArr[selectedOption]]}

        <div className="mt-4">
          {selectedOption < optionsArr.length - 1 ? (
            <button
              onClick={handleNext}
              className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 w-full"
            >
              Next
            </button>
          ) : (
            <Link
              to="/app/final" // Corrected path
              onClick={handleSubmit}
              className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 w-full"
            >
              Submit
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserData;
