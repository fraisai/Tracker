import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ padding: '1rem', borderBottom: '1px solid #ddd' }}>
      <nav style={{ display: 'flex', gap: '1rem' }}>
        <Link to="/">Tracker</Link>
        <Link to="/store">Store</Link>
      </nav>
    </header>
  );
};

export default Header;