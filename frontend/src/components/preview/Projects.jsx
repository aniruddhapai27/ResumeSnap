import { useResume } from "@/contexts/ResumeContext";

function Projects() {
  const { state } = useResume();

  return (
    <div className="py-1">
      {state.projects &&
        state.projects.length !== 0 &&
        (state.projects[0].title.trim() !== "" ||
          state.projects[0].about.trim() !== "") && (
          <>
            <h3 className="text-lg font-semibold mb-2">Projects</h3>{" "}
            {/* Reduced font size */}
            {/* Loop through each project and display title and about */}
            {state.projects.map((project, index) => (
              <div key={index} className="mb-2">
                {/* Project Title with bold font and appropriate text size */}
                <p className="font-bold text-lg">{project.title}</p>{" "}
                {/* Reduced title font size */}
                {/* Project About with normal font weight and a smaller text size */}
                <p className="text-sm leading-4">{project.about}</p>{" "}
                {/* Reduced about text size */}
              </div>
            ))}
          </>
        )}
    </div>
  );
}

export default Projects;
