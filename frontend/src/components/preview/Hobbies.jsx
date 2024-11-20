import { useResume } from "@/contexts/ResumeContext";

function Hobbies() {
  const { state } = useResume();
  return (
    <div className="py-3">
      {" "}
      {/* Reduced padding top for better fitting */}
      {state.hobbies.length !== 0 && state.hobbies?.[0]?.trim() !== "" && (
        <>
          <h3 className="text-lg font-semibold mb-1 leading-3">Hobbies</h3>{" "}
          {/* Reduced font size of title and margin bottom */}
          <ul className="list-disc list-inside text-sm leading-4">
            {" "}
            {/* Reduced font size and line spacing */}
            {state.hobbies.map((hobby, index) => (
              <li key={index} className="text-sm">
                {" "}
                {/* Reduced font size of list items */}
                {hobby}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default Hobbies;
