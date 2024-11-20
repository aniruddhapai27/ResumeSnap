import Account from "./Account";
import Logo from "./Logo";

function Navbar() {
  return (
    <div className="border-black border-2 flex justify-between items-center h-16 px-10 ">
      <Logo />
      <Account></Account>
    </div>
  );
}

export default Navbar;
