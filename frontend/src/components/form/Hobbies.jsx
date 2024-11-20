import { useResume } from "@/contexts/ResumeContext"; // Assuming you're using context
import { Button } from "../ui/button";

function Hobbies() {
  const { state, setState } = useResume(); // Access context for global state

  const handleAddHobby = () => {
    setState((prevState) => ({
      ...prevState,
      hobbies: [...prevState.hobbies, ""], // Add an empty string to the hobbies array
    }));
  };

  const handleHobbyChange = (index, value) => {
    setState((prevState) => {
      const newHobbies = [...prevState.hobbies];
      newHobbies[index] = value; // Update the specific hobby
      return {
        ...prevState,
        hobbies: newHobbies,
      };
    });
  };

  const handleRemoveHobby = (index) => {
    setState((prevState) => {
      const newHobbies = prevState.hobbies.filter((_, i) => i !== index); // Remove hobby by index
      return {
        ...prevState,
        hobbies: newHobbies,
      };
    });
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-3">Hobbies</h2>
      <Button
        onClick={handleAddHobby}
        className="w-auto h-auto bg-green-500 hover:bg-green-600 px-4 py-2 mb-4 rounded-md"
      >
        +
      </Button>
      {state.hobbies.map((hobby, index) => (
        <div key={index} className="flex items-center mb-2">
          <input
            type="text"
            value={hobby}
            onChange={(e) => handleHobbyChange(index, e.target.value)}
            placeholder={`Hobby ${index + 1}`}
            className="flex-grow p-2 border border-gray-300 rounded-md mr-2"
          />
          <Button
            onClick={() => handleRemoveHobby(index)}
            className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
          >
            X
          </Button>
        </div>
      ))}
    </div>
  );
}

export default Hobbies;
