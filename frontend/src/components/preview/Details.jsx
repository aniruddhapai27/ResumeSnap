import { useResume } from "@/contexts/ResumeContext";

function Details() {
  const { state } = useResume();

  const extractUsername = (url) => {
    const urlParts = url?.split("/");
    return urlParts?.[urlParts.length - 1] === ""
      ? urlParts?.[urlParts.length - 2]
      : urlParts?.[urlParts.length - 1];
  };

  return (
    <div>
      {/* Header */}
      <header className="border-b-2 border-black px-4 py-2 text-center">
        <h1 className="text-2xl font-bold leading-tight">
          {state?.details?.name || "Your Name"}
        </h1>
        <p className="text-sm mt-1">
          {state?.details?.email || "youremail@example.com"} |{" "}
          {state?.details?.phone || "123-456-7890"}
        </p>
        <p className="text-xs mt-1">
          {state?.details?.city || "City"}, {state?.details?.state || "State"}
        </p>

        {/* Social Links */}
        <div className="mt-2 text-xs flex justify-between items-center gap-4">
          {state?.details?.linkedin && (
            <a
              href={state?.details?.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <img
                src="/linkedin.png"
                className="w-4 h-4 inline mr-2"
                alt="LinkedIn"
              />
              {extractUsername(state?.details?.linkedin)}
            </a>
          )}
          {state?.details?.github && (
            <a
              href={state?.details?.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <img
                src="/github.png"
                className="w-4 h-4 inline mr-2"
                alt="GitHub"
              />
              {extractUsername(state?.details?.github)}
            </a>
          )}
          {state?.details?.leetcode && (
            <a
              href={state?.details?.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <img
                src="/leetcode.png"
                className="w-4 h-4 inline mr-2"
                alt="LeetCode"
              />
              {extractUsername(state?.details?.leetcode)}
            </a>
          )}
        </div>
      </header>
    </div>
  );
}

export default Details;
