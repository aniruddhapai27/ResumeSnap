import { useResume } from "@/contexts/ResumeContext";

function Experience() {
  const { state } = useResume();

  // Filter out empty or whitespace-only experience
  const validExperience = state?.experience?.filter(
    (exp) => exp.title.trim() !== "" || exp.description.trim() !== ""
  );

  return (
    <div className="py-1">
      {validExperience?.length > 0 && (
        <>
          <h3 className="text-lg font-semibold mb-2">Experience</h3>{" "}
          {/* Reduced font size */}
          {/* Loop through each experience and display title and description */}
          {validExperience.map((exp, index) => (
            <div key={index} className="mb-2">
              {" "}
              {/* Increased margin for separation */}
              <p className="font-semibold text-base">{exp.title}</p>{" "}
              {/* Reduced text size */}
              <p className="text-sm leading-4">{exp.description}</p>{" "}
              {/* Reduced text size */}
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default Experience;
