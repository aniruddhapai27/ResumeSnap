import { Link } from "react-router-dom";

function Content() {
  return (
    <div className="h-[700px] border-black border-2 flex justify-center items-center">
      <div className="h-1/2 w-full sm:w-3/4 md:w-1/2 lg:w-1/3 flex justify-between">
        <Link
          to="createresume"
          className="border-black border-2 w-full sm:w-2/5 h-full flex justify-center items-center py-2 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg"
        >
          Create Your Resume
        </Link>
        <Link
          to="myresume"
          className="border-black border-2 w-full sm:w-2/5 h-full flex justify-center items-center py-2 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg"
        >
          See Your Resume
        </Link>
      </div>
    </div>
  );
}

export default Content;
