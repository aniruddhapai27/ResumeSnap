import React, { useRef } from "react";
import { useResume } from "@/contexts/ResumeContext";
import html2pdf from "html2pdf.js";
import Resume from "./Resume";

function ResumePage() {
  const { state } = useResume();
  const resumeRef = useRef(); // Ref to the Resume component for capturing its content

  const handleDownloadPdf = () => {
    const resumeContent = resumeRef.current; // Get the content of the Resume component

    // Use html2pdf to convert the HTML content into a PDF
    const options = {
      filename: "resume.pdf",
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }, // A4 format
      html2canvas: { scale: 3 }, // Adjust scale for better quality
      margin: [3, 3, 3, 3], // Set margins (top, right, bottom, left)
      pagebreak: { mode: "avoid-all", before: ".pagebreak" }, // Control page breaks
    };

    html2pdf()
      .from(resumeContent) // Convert from the Resume content
      .set(options)
      .save(); // Trigger the download
  };

  return (
    <div className="bg-gray-200 flex flex-col items-center">
      <button
        onClick={handleDownloadPdf}
        className="bg-green-500 w-auto text-white px-4 py-2 mt-2 rounded-md hover:bg-green-600 mb-4"
      >
        Download PDF
      </button>

      {/* Render the Resume component here, wrapped with ref */}
      <div ref={resumeRef} style={{ maxWidth: "100%", maxHeight: "100%" }}>
        <Resume />
      </div>
    </div>
  );
}

export default ResumePage;
