import React, { useEffect, useState } from 'react';
import { api } from '../Modules/API';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, setMinifig } from '../Modules/Redux/Slice/FigSlice';
import Figure from '../Components/Figure';
import { Link } from 'react-router-dom';

const Minifig = () => {
  const [active, setActive] = useState(-1);
  const dispatch = useDispatch();
  const figures = useSelector((state) => state.figReducer.items);
  const figure = useSelector((state) => state.figReducer.minifig);

  const handleClick = (id) => {
    setActive(id);
  };

  const searchFigs = (response) => {
    const arr = new Array(3);
    let i = 0;
    while (i < 3) {
      const index = Math.floor(Math.random() * response.data.results.length);
      const minifig = response.data.results[index];
      if (minifig.set_img_url) {
        response.data.results.splice(index, 1);
        arr.push(minifig);
        i += 1;
      }
    }
    dispatch(addItem(arr));
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const responce = await api.get('/minifigs/?page_size=363&in_theme_id=246');
        searchFigs(responce);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const chooseMinifig = (id) => {
    dispatch(setMinifig(figures[id]));
  };

  return (
    <div className="minifig">
      <div className="minifig__items">
        {figures.map((item, id) => {
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
