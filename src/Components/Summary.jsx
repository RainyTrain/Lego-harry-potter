import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../UI/Button/Button';
import { api } from '../Modules/API';
import { addDetail } from '../Modules/Redux/Slice/FigSlice';

const Summary = () => {
  const minifig = useSelector((state) => state.figReducer.minifig);
  const details = useSelector((state) => state.figReducer.details);

  const dispatch = useDispatch();
  useEffect(() => {
    console.log(minifig);
  });

  const disptachData = (res) => {
    dispatch(addDetail(res));
  };

  useEffect(() => {
    const getDetails = async (set_num) => {
      try {
        const responce = await api.get(`minifigs/${set_num}/parts`);
        disptachData(responce.data.results);
        console.log('my details', responce.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getDetails(minifig.set_num);
  }, []);

  return (
    <div className="summary">
      <div className="summary__title">SUMMARY</div>
      <div className="summary__img">
        <img src={minifig.set_img_url}></img>
      </div>
      <div className="summary__name"><span>{minifig.name}</span></div>
      <div className="summary__description">There are {minifig.num_parts} in this minifig</div>
      <div className="summary__details">
        {details.map((item) => {
          return (
            <div className="object">
              <img src={item.part.part_img_url}></img>
              <div>{item.part.name}</div>
            </div>
          );
        })}
      </div>
      <div className="summary__button">
        <Button>SUBMIT!</Button>
      </div>
    </div>
  );
};
export default Summary;
