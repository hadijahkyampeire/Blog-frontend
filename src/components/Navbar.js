import React from 'react';

const Navbar =()=>(
    <nav class="navbar navbar-light bg-light nav">
  <a class="navbar-brand" href="/">
    <div className="logo"></div>
    Blog site
  </a>
  <li className="nav-item">
        <a className="nav-link" href="/publicblogs">Published Blogs</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/"><i className="fa fa-sign-out"/>Logout</a>
      </li>
</nav>
)
export default Navbar;