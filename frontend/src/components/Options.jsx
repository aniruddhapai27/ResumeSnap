// Options.js
function Options({ options, selectedOption, onOptionSelect }) {
  return (
    <div>
      <ul className="space-y-4">
        {options.map((option, index) => (
          <li
            key={option}
            className={`p-2 rounded-md cursor-pointer ${
              selectedOption === option
                ? "bg-blue-500 text-white"
                : "hover:bg-gray-200"
            }`} // Conditionally apply classes
            onClick={() => onOptionSelect(index)} // Set the selected option by index
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Options;
