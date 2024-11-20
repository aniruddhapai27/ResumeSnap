import Logo from "@/components/Logo";
import { Link } from "react-router-dom";

function CreateResume() {
  // Array of template names or IDs for demonstration purposes
  const templates = Array.from({ length: 10 }, (_, i) => `Template ${i + 1}`);

  return (
    <div className="">
      <div className="flex flex-col items-center mt-5">
        <h1 className="text-5xl font-bold mb-5">Templates</h1>
        <h3 className="text-3xl font-medium">Select your template</h3>
      </div>

      <div className="border-black border-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4 mx-auto justify-items-center">
        {templates.map((template, index) => (
          <Link
            to="create"
            key={index}
            className="border-black border-2 w-[200px] h-[282px] sm:w-[250px] sm:h-[353px] md:w-[210px] md:h-[297px] lg:w-[250px] lg:h-[353px] flex justify-center items-center"
          >
            {template}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CreateResume;
