import { Link, Outlet } from "react-router-dom";
const AboutPage = () => {
  return (
    <div>
      <h2>Ini About Page</h2>
      <Link to="about-company">About The Company</Link> | {''} <Link to="about-me">About Me</Link>
      <Outlet />
    </div>
  );
};

export default AboutPage;
