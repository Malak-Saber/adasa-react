import { NavLink, Link } from "react-router-dom";


function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-content">
        <Link to="/" className="logo">
          <span className="logo-icon">ع</span>
          <span>عدسة</span>
        </Link>
        <nav className="nav-links">
          <NavLink to="/">الرئيسية</NavLink>
          <NavLink to="/blog">المدونة</NavLink>
        </nav>
        <Link to="/blog" className="nav-button">
          ابدأ القراءة
        </Link>
      </div>
    </header>
  );
}
export default Navbar;