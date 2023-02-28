import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { api } from '../Modules/API';
import { clearData } from '../Modules/Redux/Slice/DataSlice';
import { addDetail, clearCart } from '../Modules/Redux/Slice/FigSlice';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Summary = () => {
  const minifig = useSelector((state) => state.figReducer.minifig);
  const details = useSelector((state) => state.figReducer.details);
  const isValid = useSelector((state) => state.figReducer.isFormValid);
  const data = useSelector((state) => state.dataReducer.data);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const disptachData = (res) => {
    dispatch(addDetail(res));
  };

  useEffect(() => {
    const getDetails = async (set_num) => {
      try {
        const responce = await api.get(`minifigs/${set_num}/parts`);
        console.log(responce.data.results)
        disptachData(responce.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getDetails(minifig.set_num);
  }, []);

  const submitOrder = async () => {
    try {
      await axios
        .post('https://jsonplaceholder.typicode.com/posts', {
          body: JSON.stringify({
            userData: data,
            minifig: minifig,
            details: details,
          }),
        })
        .then(() => {
          dispatch(clearCart());
          dispatch(clearData());
          navigate('/response');
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="summary">
      <div className="summary__title">SUMMARY</div>
      <div className="summary__img">
        <img src={minifig.set_img_url}></img>
      </div>
      <div className="summary__name">
        <span>{minifig.name}</span>
      </div>
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
        <button onClick={submitOrder} disabled={!isValid}>
          SUBMIT!
        </button>
      </div>
    </div>
  );
};
export default Summary;
