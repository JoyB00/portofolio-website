import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="fixed z-10 w-full bg-black/50 p-4 backdrop-blur-xl">
      <div className="flex justify-around">
        <NavLink to="/" className="text-white">
          <p className="text-start">
            <span className="font-black">DENDYPORTO </span>&#169;2024
          </p>
        </NavLink>
        <div className="flex gap-x-10">
          <NavLink to="/about">About</NavLink>
          <NavLink>Project</NavLink>
          <NavLink>Contact</NavLink>
        </div>
      </div>
    </div>
  );
}
