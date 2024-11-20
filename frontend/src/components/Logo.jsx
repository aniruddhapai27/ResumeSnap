import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className="font-bold text-4xl text-blue-400">
      Resume<span className="text-blue-600">Snap</span>
    </Link>
  );
}

export default Logo;
