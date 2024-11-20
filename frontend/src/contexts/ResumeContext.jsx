import { createContext, useContext, useState } from "react";

const initialState = {
  details: {
    name: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    linkedin: "",
    leetcode: "",
    github: "",
  },
  skills: [""], // array of skill strings
  experience: [
    {
      title: "",
      description: "",
    },
  ],
  education: [
    {
      name: "",
      score: "",
      type: "CGPA", // Default type for new entries
      finalScore: "", // This will store the combined value of score and type
      timespan: "",
    },
  ],
  projects: [
    {
      title: "",
      about: "",
    },
  ],
  hobbies: [""], // array of hobby strings
};

const ResumeContext = createContext();

function ResumeProvider({ children }) {
  const [state, setState] = useState(initialState);

  // Pass state and setState to the provider
  return (
    <ResumeContext.Provider value={{ state, setState }}>
      {children}
    </ResumeContext.Provider>
  );
}

function useResume() {
  const context = useContext(ResumeContext);
  if (context === undefined) {
    throw new Error("useResume must be used within a ResumeProvider");
  }
  return context;
}

export { ResumeProvider, useResume };
