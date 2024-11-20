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
    <div className="px-6 h-full bg-white rounded-lg">
      <Details />
      <div className="">
        <Skills />
        {state.skills.length !== 0 && state.skills[0] !== "" && (
          <div className="border-t border-gray-300 my-2"></div>
        )}
      </div>

      <div className="">
        <Experience />
        {state.experience.length !== 0 && state.experience[0].title !== "" && (
          <div className="border-t border-gray-300 my-2"></div>
        )}
      </div>

      <div className="">
        <Education />
        {state.education.length !== 0 && state.education[0].name !== "" && (
          <div className="border-t border-gray-300 my-2"></div>
        )}
      </div>

      <div className="">
        <Projects />
        {state.projects.length !== 0 && state.projects[0].title !== "" && (
          <div className="border-t border-gray-300 my-2"></div>
        )}
      </div>

      <div className="">
        <Hobbies />
      </div>
    </div>
  );
}

export default ResumePreview;
