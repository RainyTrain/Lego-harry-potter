import React, { useEffect, useState } from 'react';
import { getData, setMinifig } from '../Modules/Redux/Slice/FigSlice';
import Figure from '../Components/Figure';
import { Link } from 'react-router-dom';
import { useAppDispatch, useTypedSelector } from '../Hooks';

const Minifig: React.FC = () => {
  const [active, setActive] = useState<number>(-1);
  const dispatch = useAppDispatch();
  const figures = useTypedSelector((state) => state.figReducer.items);

  const handleClick = (id: number) => {
    setActive(id);
  };

  useEffect(() => {
    dispatch(getData());
  }, []);

  const chooseMinifig = (id: number) => {
    dispatch(setMinifig(figures[id]));
  };

  return (
    <div className="minifig">
      <div className="minifig__items">
        {figures.map((item, id: number) => {
          return <Figure id={id} active={active} handleClick={handleClick} key={id} {...item} />;
        })}
      </div>
      {active >= 0 ? (
        <Link style={{ textDecoration: 'none' }} to="/order">
          <button onClick={() => chooseMinifig(active)}>PROCEED TO SHIPMENT</button>
        </Link>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Minifig;
