import { Link, Outlet } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <Link to="/">HOME</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};
