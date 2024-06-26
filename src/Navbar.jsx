import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="fixed z-10 w-full bg-black/50 p-4 backdrop-blur-xl">
      <div className="flex justify-around">
        <p className="text-start">
          <span className="font-black">DENDYPORTO </span>&#169;2024
        </p>
        <div className="flex gap-x-10">
          <NavLink>About</NavLink>
          <NavLink>About</NavLink>
          <NavLink>About</NavLink>
        </div>
      </div>
    </div>
  );
}
