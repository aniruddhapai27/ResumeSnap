import { useResume } from "@/contexts/ResumeContext";

function Education() {
  const { state, setState } = useResume();

  // Function to handle adding a new education entry
  const addEducation = () => {
    const newEducation = {
      name: "",
      score: "",
      type: "CGPA",
      customType: "",
      timespan: "",
    };
    setState({
      ...state,
      education: [...state.education, newEducation],
    });
  };

  // Function to handle deleting an education entry
  const deleteEducation = (index) => {
    const updatedEducation = state.education.filter((_, i) => i !== index);
    setState({
      ...state,
      education: updatedEducation,
    });
  };

  // Function to handle input change for each education entry
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const updatedEducation = [...state.education];

    // Update the specific field
    updatedEducation[index][name] = value;

    // Update the `finalScore` field dynamically
    const score = updatedEducation[index].score || "";
    const type =
      updatedEducation[index].customType || updatedEducation[index].type || "";
    updatedEducation[index].finalScore = score ? `${type}: ${score}` : "";

    setState({
      ...state,
      education: updatedEducation,
    });
  };

  return (
    <div className="p-5">
      <h3 className="text-xl font-semibold mb-2">Education</h3>

      {/* Render each education entry */}
      {state.education.map((edu, index) => (
        <div key={index} className="mb-4">
          <div className="mb-2">
            <label className="block mb-1">School/College/University Name</label>
            <input
              type="text"
              name="name"
              value={edu.name}
              onChange={(e) => handleInputChange(e, index)}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="branch | school/college"
            />
          </div>

          <div className="mb-2 flex items-center gap-2">
            <div className="w-1/3">
              <label className="block mb-1">Type</label>
              <select
                name="type"
                value={edu.type}
                onChange={(e) => handleInputChange(e, index)}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="Percentage">Percentage</option>
                <option value="CGPA">CGPA</option>
                <option value="Rank">Rank</option>
                <option value="Marks">Marks</option>
                <option value="">Other (Specify)</option>
              </select>
            </div>
            {edu.type === "" && (
              <div className="flex-1">
                <label className="block mb-1">Custom Type</label>
                <input
                  type="text"
                  name="customType"
                  value={edu.customType}
                  onChange={(e) => handleInputChange(e, index)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Specify type"
                />
              </div>
            )}
            <div className="flex-1">
              <label className="block mb-1">Score</label>
              <input
                type="text"
                name="score"
                value={edu.score}
                onChange={(e) => handleInputChange(e, index)}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter score"
              />
            </div>
          </div>

          <div className="mb-2">
            <label className="block mb-1">Timespan</label>
            <input
              type="text"
              name="timespan"
              value={edu.timespan}
              onChange={(e) => handleInputChange(e, index)}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="ex: 2022-2026"
            />
          </div>

          {/* Button to delete an education entry */}
          <button
            className="text-red-500 mt-2"
            onClick={() => deleteEducation(index)}
          >
            Delete Education
          </button>
        </div>
      ))}

      {/* Button to add a new education entry */}
      <button
        onClick={addEducation}
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
      >
        + Add Education
      </button>
    </div>
  );
}

export default Education;
