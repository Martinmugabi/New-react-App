import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/my-team">My Team</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/testimonials">Testimonials</Link></li>
        <li><Link to="/awards">Awards</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;