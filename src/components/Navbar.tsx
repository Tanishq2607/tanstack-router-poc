import { Link } from "@tanstack/react-router"

const Navbar = () => {
  return (
    <>
      <div className="md-flex space-x-6 mx-4 py-3">
        <Link to="/" activeProps={{ className: "font-bold" }}>
          Home
        </Link>
        <Link to="/about" activeProps={{ className: "font-bold" }}>
          About
        </Link>
        <Link
          to="/users"
          search={{ page: 1 }}
          activeProps={{ className: "font-bold" }}
        // mask={{
        //   to: '/users-list',
        // }}
        >
          Users
        </Link>
        <Link to="/demo" activeProps={{ className: "font-bold" }}>
          PathLess Layout
        </Link>
        <Link to="/post" activeProps={{ className: "font-bold" }}>
          post
        </Link>
        <Link to="/shops" activeProps={{ className: "font-bold" }}>features</Link>
      </div>
    </>
  )
}

export default Navbar
