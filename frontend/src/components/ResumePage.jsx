import { useRef } from "react";
import html2pdf from "html2pdf.js";
import Resume from "./Resume";

function ResumePage() {
  const resumeRef = useRef(); // Ref to the Resume component for capturing its content

  const handleDownloadPdf = () => {
    const resumeContent = resumeRef.current; // Get the content of the Resume component

    // Use html2pdf to convert the HTML content into a PDF
    const options = {
      margin: [2, 2, 2, 2], // Set margins (top, right, bottom, left)
      filename: "resume.pdf",
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }, // A4 format
      html2canvas: { scale: 2 },
      pagebreak: { mode: ["avoid-all"], before: ".header" }, // Prevent header splitting
    };

    html2pdf()
      .from(resumeContent) // Convert from the Resume content
      .set(options)
      .save(); // Trigger the download
  };

  return (
    <div className="bg-gray-200 flex flex-col items-center py-6 px-4">
      <button
        onClick={handleDownloadPdf}
        className="bg-green-500 text-white px-6 py-3 mt-4 rounded-md hover:bg-green-600 mb-6 w-full sm:w-auto"
      >
        Download PDF
      </button>

      {/* Render the Resume component here, wrapped with ref */}
      <div
        ref={resumeRef}
        className="w-full sm:max-w-[21cm] sm:h-auto bg-white "
        style={{ maxHeight: "100%" }}
      >
        <Resume />
      </div>
    </div>
  );
}

export default ResumePage;
