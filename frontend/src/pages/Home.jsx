import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="relative flex flex-col h-screen justify-evenly items-center bg-gradient-to-r from-violet-500 to-fuchsia-500">
      {/* Background Image Layer with Movement Animation */}
      <div
        className="absolute inset-0 bg-[url('../../imagebg.png')] bg-no-repeat bg-cover bg-center opacity-40"
        style={{
          animation: "move-background 60s linear infinite",
        }}
      ></div>

      {/* Content Layer */}
      <div className="relative text-center p-8 h-4/6 w-full z-10 flex flex-col justify-center items-center space-y-8">
        {/* Header (h1) */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white drop-shadow-lg">
          Build Your Professional Resume in Minutes!
        </h1>

        {/* Subheading (h3) */}
        <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-100 opacity-90 max-w-xl leading-relaxed">
          Easy-to-use interface with customizable templates tailored for job
          seekers
        </h3>

        {/* Button */}
        <Link
          // to="app"
          to="app/createresume/create"
          className="px-10 py-4 sm:px-12 sm:py-5 text-base sm:text-lg md:text-xl font-semibold text-violet-50 bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}

export default Home;
