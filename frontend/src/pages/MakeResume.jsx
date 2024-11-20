import ResumePreview from "@/components/ResumePreview";
import UserData from "@/components/UserData";

function MakeResume() {
  return (
    <div className="w-full min-h-screen bg-gray-300 flex flex-col lg:flex-row justify-center items-start py-10 gap-8">
      {/* User Data Section */}
      <div className="w-full lg:w-[800px] h-auto bg-white border border-gray-300 shadow-md rounded-lg p-6">
        <UserData />
      </div>

      {/* Resume Preview Section */}
      <div className="w-full lg:w-[794px] h-auto lg:h-[1123px] bg-white border border-gray-300 rounded-lg p-8 mt-8 lg:mt-0">
        <ResumePreview />
      </div>
    </div>
  );
}

export default MakeResume;
