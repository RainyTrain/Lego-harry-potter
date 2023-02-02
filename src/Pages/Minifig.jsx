import React, { useEffect, useState } from 'react';
import { api } from '../Modules/API';

const Minifig = () => {
  const [list, setList] = useState([]);

  const randomNumbers = (response) => {
    const arr = new Array(3);
    for (let index = 0; index < arr.length; index++) {
      const index = Math.floor(Math.random() * response.data.results.length);
      const minifig = response.data.results[index];
      response.data.results.splice(index, 1);
      arr.push(minifig);
      console.log('Length', response.data.results.length);
      console.log(minifig);
    }
    setList(arr);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const responce = await api.get('/minifigs/?page_size=363&in_theme_id=246');
        randomNumbers(responce);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const responce = await api.get('/minifigs/?page_size=363&in_theme_id=246');
        randomNumbers(responce);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return <div className="minifig"></div>;
};

export default Minifig;
