import { Link, Outlet } from "react-router-dom";
const MembersPage = () => {
  return (
    <div>
      <h1>Member Page</h1>
      <p>Select a member to be shown</p>
      <Link to="Jhon Doe">John Doe</Link> | {""}
      <Link to="Doe Jane">Doe Jane</Link>
      <Outlet />
    </div>
  );
};

export default MembersPage;
