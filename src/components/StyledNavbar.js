import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        <Button variant="outline-primary">Home</Button>
      </NavLink>
      <NavLink
        to="/profile"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        <DropdownButton
          variant="outline-success"
          id="dropdown-basic-button"
          title="Profile"
        >
          <Dropdown.Item href="#/account information">
            Account Information
          </Dropdown.Item>
          <Dropdown.Item href="#/status">Status</Dropdown.Item>
          <Dropdown.Item href="#/settings">Settings</Dropdown.Item>
        </DropdownButton>
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        <Button variant="outline-success">Contact</Button>
      </NavLink>
    </nav>
  );
};
export default Navbar;
