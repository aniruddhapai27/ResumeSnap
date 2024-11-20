import Education from "./preview/Education";
import Details from "./preview/Details";
import Experience from "./preview/Experience";
import Skills from "./preview/Skills";
import Projects from "./preview/Projects";
import Hobbies from "./preview/Hobbies";
import { useResume } from "@/contexts/ResumeContext";

function Resume() {
  const { state } = useResume();

  return (
    <div className="flex justify-center items-center">
      <div
        className="w-[21cm] h-[1093px] bg-white p-4"
        style={{
          fontFamily: "Arial, sans-serif",
          fontSize: "10pt", // Adjust font size to fit more content
          lineHeight: "1.4", // Adjust line height for better readability
          margin: "0 auto",
          boxSizing: "border-box",
          overflow: "hidden", // Ensure no scroll and fits within A4 size
        }}
      >
        {/* Resume Header */}
        <div className="mb-2">{state.details && <Details />}</div>

        {/* Skills Section */}
        {state.skills && state.skills.length > 0 && state.skills[0] !== "" && (
          <div className="mb-6">
            <Skills />
            <div className="border-t border-gray-300 my-4"></div>
          </div>
        )}

        {/* Experience Section */}
        {state.experience &&
          state.experience.length > 0 &&
          state.experience[0].title !== "" && (
            <div className="mb-6">
              <Experience />
              <div className="border-t border-gray-300 my-4"></div>
            </div>
          )}

        {/* Education Section */}
        {state.education &&
          state.education.length > 0 &&
          state.education[0].name !== "" && (
            <div className="mb-6">
              <Education />
              <div className="border-t border-gray-300 my-4"></div>
            </div>
          )}

        {/* Projects Section */}
        {state.projects &&
          state.projects.length > 0 &&
          state.projects[0].title !== "" && (
            <div className="mb-6">
              <Projects />
              <div className="border-t border-gray-300 my-4"></div>
            </div>
          )}

        {/* Hobbies Section */}
        {state.hobbies &&
          state.hobbies.length > 0 &&
          state.hobbies[0] !== "" && (
            <div>
              <Hobbies />
            </div>
          )}
      </div>
    </div>
  );
}

export default Resume;
