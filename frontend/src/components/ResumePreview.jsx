import Education from "./preview/Education";
import Details from "./preview/Details";
import Experience from "./preview/Experience";
import Skills from "./preview/Skills";
import Projects from "./preview/Projects";
import Hobbies from "./preview/Hobbies";
import { useResume } from "@/contexts/ResumeContext";

function ResumePreview() {
  const { state } = useResume();
  return (
    <div className="px-6 h-full bg-white rounded-lg space-y-6">
      {/* Details Section */}
      <Details />

      {/* Skills Section */}
      {state.skills.length !== 0 && state.skills[0] !== "" && (
        <div>
          <Skills />
          <div className="border-t border-gray-300 my-2"></div>
        </div>
      )}

      {/* Experience Section */}
      {state.experience.length !== 0 && state.experience[0].title !== "" && (
        <div>
          <Experience />
          <div className="border-t border-gray-300 my-2"></div>
        </div>
      )}

      {/* Education Section */}
      {state.education.length !== 0 && state.education[0].name !== "" && (
        <div>
          <Education />
          <div className="border-t border-gray-300 my-2"></div>
        </div>
      )}

      {/* Projects Section */}
      {state.projects.length !== 0 && state.projects[0].title !== "" && (
        <div>
          <Projects />
          <div className="border-t border-gray-300 my-2"></div>
        </div>
      )}

      {/* Hobbies Section */}
      <div>
        <Hobbies />
      </div>
    </div>
  );
}

export default ResumePreview;
