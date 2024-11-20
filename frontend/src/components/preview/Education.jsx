import { useResume } from "@/contexts/ResumeContext";

function EducationPreview() {
  const { state } = useResume();
  return (
    <div className="py-1">
      {state.education &&
        state.education.length !== 0 &&
        state.education[0].name !== "" && (
          <>
            <h3 className="text-lg font-semibold mb-2">Education</h3>{" "}
            {/* Reduced font size */}
            <ul>
              {state.education.map((edu, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center mb-2"
                >
                  {/* College Name with max width of 3/4 */}
                  <p className="text-sm break-words max-w-md">
                    {edu.name}
                  </p>{" "}
                  {/* Reduced font size */}
                  <div className="flex items-center gap-1">
                    {/* Final Score */}
                    <p className="text-xs">{edu.finalScore}</p>{" "}
                    {/* Smaller text for final score */}
                    {/* Timespan */}
                    <p className="text-xs">
                      {edu.timespan && <>| ({edu.timespan})</>}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
    </div>
  );
}

export default EducationPreview;
