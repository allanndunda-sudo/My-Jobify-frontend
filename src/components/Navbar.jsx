import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/jobs", label: "Browse Jobs" },
    { path: "/profile", label: "Your Profile" },
    { path: "/matches", label: "Matches" },
  ];

  return (
    <nav className="border-b bg-gray-300 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between h-16 items-center">
        <Link to="/" className="font-bold text-xl text-blue-600">Jobify</Link>
        <div className="flex gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === link.path
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
