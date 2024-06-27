import { Outlet } from "react-router-dom";

export default function HomeRoot() {
  return (
    <div className="min-h-full">
      <Outlet />
    </div>
  );
}
