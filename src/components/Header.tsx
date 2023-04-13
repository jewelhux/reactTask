import React from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <nav className="nav-top">
      <Link to="/">Main page</Link>
      <Link to="/about">About page</Link>
      <Link to="/form">Form page</Link>
    </nav>
  );
}
