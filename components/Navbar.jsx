import React from "react";

function Navbar() {
  return (
    <header className="flex items-center justify-between px-5 h-14">
      <div className="logo text-xl font-bold">Todo List</div>
      <nav className="navbar">
        <ul className="navbar-list flex items-center justify-center gap-4">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
