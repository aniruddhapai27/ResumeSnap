import { useResume } from "@/contexts/ResumeContext";

function Projects() {
  const { state, setState } = useResume();

  // Function to handle adding a new project
  const addProject = () => {
    const newProject = { title: "", about: "" };
    setState((prevState) => ({
      ...prevState,
      projects: [...prevState.projects, newProject],
    }));
  };

  // Function to handle deleting a project
  const deleteProject = (index) => {
    const updatedProjects = state.projects.filter((_, i) => i !== index);
    setState((prevState) => ({
      ...prevState,
      projects: updatedProjects,
    }));
  };

  // Function to handle changes in the project title field
  const handleProjectTitleChange = (e, index) => {
    const updatedProjects = [...state.projects];
    updatedProjects[index].title = e.target.value;
    setState((prevState) => ({
      ...prevState,
      projects: updatedProjects,
    }));
  };

  // Function to handle changes in the project about field
  const handleProjectAboutChange = (e, index) => {
    const updatedProjects = [...state.projects];
    updatedProjects[index].about = e.target.value;
    setState((prevState) => ({
      ...prevState,
      projects: updatedProjects,
    }));
  };

  return (
    <div className="p-5">
      <h3 className="text-xl font-semibold mb-5 leading-3">Projects</h3>
      {/* Render each project with title and about */}
      {state.projects.map((project, index) => (
        <div key={index} className="mb-4">
          {/* Project Title Input Field */}
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md mb-2"
            placeholder="Enter your project title"
            value={project.title}
            onChange={(e) => handleProjectTitleChange(e, index)}
          />
          {/* Project About Textarea Field */}
          <textarea
            className="w-full p-2 border border-gray-300 rounded-md mb-2"
            rows="4"
            placeholder="Enter project description"
            value={project.about}
            onChange={(e) => handleProjectAboutChange(e, index)}
          />
          <button
            className="text-red-500 mt-2"
            onClick={() => deleteProject(index)}
          >
            Delete
          </button>
        </div>
      ))}
      {/* Button to add more projects */}
      <button className="text-blue-500 mt-4" onClick={addProject}>
        + Add Project
      </button>
    </div>
  );
}

export default Projects;
