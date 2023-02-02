import React from 'react';
import Button from '../UI/Button/Button';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <div className="home__logo">LEGO MINIFIGS MYSTERY</div>
      <Link style={{ textDecoration: 'none' }} to="/minifig">
        <Button>LET'S GO</Button>
      </Link>
    </div>
  );
};

export default Home;
