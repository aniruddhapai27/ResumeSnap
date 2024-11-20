import { useState } from "react";
import { useResume } from "@/contexts/ResumeContext";

function Experience() {
  const { state, setState } = useResume();

  // Function to handle adding a new experience
  const addExperience = () => {
    const newExperience = { title: "", description: "" };
    setState((prevState) => ({
      ...prevState,
      experience: [...prevState.experience, newExperience],
    }));
  };

  // Function to handle deleting an experience
  const deleteExperience = (index) => {
    const updatedExperience = state.experience.filter((_, i) => i !== index);
    setState((prevState) => ({
      ...prevState,
      experience: updatedExperience,
    }));
  };

  // Function to handle changes in the title field
  const handleTitleChange = (e, index) => {
    const updatedExperience = [...state.experience];
    updatedExperience[index].title = e.target.value;
    setState((prevState) => ({
      ...prevState,
      experience: updatedExperience,
    }));
  };

  // Function to handle changes in the description field
  const handleDescriptionChange = (e, index) => {
    const updatedExperience = [...state.experience];
    updatedExperience[index].description = e.target.value;
    setState((prevState) => ({
      ...prevState,
      experience: updatedExperience,
    }));
  };

  return (
    <div className="p-5">
      <h3 className="text-xl font-semibold mb-6 leading-3">Experience</h3>
      {/* Render each experience with title and description */}
      {state.experience.map((exp, index) => (
        <div key={index} className="mb-4">
          {/* Title Input Field */}
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md mb-2"
            placeholder="Enter your experience title"
            value={exp.title}
            onChange={(e) => handleTitleChange(e, index)}
          />
          {/* Description Textarea Field */}
          <textarea
            className="w-full p-2 border border-gray-300 rounded-md"
            rows="4"
            placeholder="Enter your experience description"
            value={exp.description}
            onChange={(e) => handleDescriptionChange(e, index)}
          />
          <button
            className="text-red-500 mt-2"
            onClick={() => deleteExperience(index)}
          >
            Delete
          </button>
        </div>
      ))}
      {/* Button to add more experiences */}
      <button className="text-blue-500 mt-4" onClick={addExperience}>
        + Add Experience
      </button>
    </div>
  );
}

export default Experience;
