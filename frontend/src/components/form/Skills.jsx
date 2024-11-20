import { useResume } from "@/contexts/ResumeContext"; // Assuming you're using context
import { Button } from "../ui/button";

function Skills() {
  const { state, setState } = useResume(); // Access context for global state

  const handleAddSkill = () => {
    setState((prevState) => ({
      ...prevState,
      skills: [...prevState.skills, ""], // Add an empty string to the skills array
    }));
  };

  const handleSkillChange = (index, value) => {
    setState((prevState) => {
      const newSkills = [...prevState.skills];
      newSkills[index] = value; // Update the specific skill
      return {
        ...prevState,
        skills: newSkills,
      };
    });
  };

  const handleRemoveSkill = (index) => {
    setState((prevState) => {
      const newSkills = prevState.skills.filter((_, i) => i !== index); // Remove skill by index
      return {
        ...prevState,
        skills: newSkills,
      };
    });
  };
  console.log(state.skills);

  return (
    <div>
      <h2 className="text-xl font-bold mb-3">Skills</h2>
      <Button
        onClick={handleAddSkill}
        className="w-auto h-auto bg-green-500 hover:bg-green-600 px-4 py-2 mb-4 rounded-md"
      >
        +
      </Button>
      {state.skills.map((skill, index) => (
        <div key={index} className="flex items-center mb-2">
          <input
            type="text"
            value={skill}
            onChange={(e) => handleSkillChange(index, e.target.value)}
            placeholder={`Skill ${index + 1}`}
            className="flex-grow p-2 border border-gray-300 rounded-md mr-2"
          />
          <Button
            onClick={() => handleRemoveSkill(index)}
            className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
          >
            X
          </Button>
        </div>
      ))}
    </div>
  );
}

export default Skills;
