import Button from '../UI/Button/Button';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { getTestData } from '../Modules/Redux/Slice/TestSlice';
import { useAppDispatch } from '../Hooks';

const Home: React.FC = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getTestData())
  } ,[])
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
