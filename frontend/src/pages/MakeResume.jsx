import ResumePreview from "@/components/ResumePreview";
import UserData from "@/components/UserData";

function MakeResume() {
  return (
    <div className="w-full min-h-screen bg-blue-800 flex justify-center items-start py-10 gap-8">
      {/* User Data Section */}
      <div className="w-[800px] h-auto bg-white border border-gray-300 shadow-md rounded-lg p-6">
        <UserData />
      </div>

      {/* Resume Preview Section */}
      <div className="w-[794px] h-[1123px] bg-white border border-gray-300 rounded-lg p-8">
        <ResumePreview />
      </div>
    </div>
  );
}

export default MakeResume;
