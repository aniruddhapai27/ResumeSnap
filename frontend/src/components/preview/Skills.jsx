import { useResume } from "@/contexts/ResumeContext";

function Skills() {
  const { state } = useResume();

  // Filter out empty or whitespace-only skills
  const validSkills = state?.skills?.filter((skill) => skill.trim() !== "");

  return (
    <div className="pt-4 pb-3">
      {validSkills?.length > 0 && (
        <>
          <h3 className="text-lg font-semibold mb-2">Skills</h3>
          <ul className="list-disc list-inside grid grid-cols-2 gap-1 leading-3 text-sm">
            {/* Two columns with reduced vertical gap and smaller font size */}
            {validSkills.map((skill, index) => (
              <li key={index} className="capitalize">
                {skill}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default Skills;
