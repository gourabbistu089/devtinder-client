import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

function Navbar() {
  const user = useSelector((state) => state.user);
  return (
    <div className="navbar bg-base-300 shadow-sm px-8">
  <div className="flex-1">
    <Link to="/" className="btn btn-ghost text-xl">DevTinder❤️</Link>
  </div>
  <div className="flex gap-2">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        {
          user && (
            <div className="w-10 rounded-full">
          <img
          src={user.photoUrl}
            alt="User Photo"
            />
        </div>
          )
        }
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <Link to="/profile" className="justify-between">
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
  )
}

export default Navbar