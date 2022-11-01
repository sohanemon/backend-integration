import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul>
        <Link to={"/"}>Home</Link>
        <Link to={"/register"}>Register</Link>
      </ul>
      <br />
      <Outlet />
    </div>
  );
};

export default Navbar;
