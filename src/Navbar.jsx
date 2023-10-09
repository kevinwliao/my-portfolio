import React from "react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 fixed">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Kevin Liao</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary>Projects</summary>
                <ul className="p-2 bg-base-200 w-56">
                  <li>
                    <a href="#electronic">
                      Electronic and Algorithmic Compositions
                    </a>
                  </li>
                  <li>
                    <a href="#acoustic">Acoustic Compositions</a>
                  </li>
                  <li>
                    <a href="#physical">
                      Physical Interaction Design for Music
                    </a>
                  </li>
                  <li>
                    <a href="#web">Web Applications</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Writing</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
