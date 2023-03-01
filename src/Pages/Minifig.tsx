import React, { useEffect, useState } from 'react';
import { api } from '../Modules/API';
import { addItem, setMinifig } from '../Modules/Redux/Slice/FigSlice';
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

  const searchFigs = (response: any) => {
    const arr = new Array(3);
    let i = 0;
    while (i < 3) {
      const index = Math.floor(Math.random() * response.length);
      const minifig = response[index];
      if (minifig.set_img_url) {
        response.splice(index, 1);
        arr.push(minifig);
        i += 1;
      }
    }
    dispatch(addItem(arr));
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await api.get('/minifigs/?page_size=363&in_theme_id=246');
        console.log(response.data.results);
        searchFigs(response.data.results);
      } catch (error) {
        let message = 'Unknown Error';
        if (error instanceof Error) message = error.message;
        console.log(message);
      }
    };
    getData();
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
