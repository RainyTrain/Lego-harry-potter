import React, { useEffect, useState } from 'react';
import { api } from '../Modules/API';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../Modules/Redux/Slice/FigSlice';
import Figure from '../Components/Figure';

const Minifig = () => {
  const dispatch = useDispatch();
  const figures = useSelector((state) => state.figReducer.items);

  const randomFigs = (response) => {
    const arr = new Array(3);
    let i = 0
    while (i < 3) {
      const index = Math.floor(Math.random() * response.data.results.length);
      const minifig = response.data.results[index];
      if (minifig.set_img_url) {
        response.data.results.splice(index, 1);
        arr.push(minifig);
        i += 1;
        console.log('Length', response.data.results.length);
        console.log(minifig);
      }
    }
    dispatch(addItem(arr));
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const responce = await api.get('/minifigs/?page_size=363&in_theme_id=246');
        randomFigs(responce);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div className="minifig">
      {figures.map((item, id) => {
        return <Figure key={id} {...item} />;
      })}
    </div>
  );
};

export default Minifig;
