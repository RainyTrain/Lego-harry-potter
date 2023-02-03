import { useDispatch, useSelector } from 'react-redux';
import { api } from '../Modules/API';
import { addDetail } from '../Modules/Redux/Slice/FigSlice';
import '../Styles/Figure.scss';

const Figure = ({ name, set_img_url, set_num, id, handleClick, active }) => {
  // const details = useSelector((state) => state.figReducer.details);

  // const dispatch = useDispatch();

  // const disptachData = (res) => {
  //   dispatch(addDetail(res));
  // };

  // const getDetails = async (set_num) => {
  //   try {
  //     const responce = await api.get(`minifigs/${set_num}/parts`);
  //     disptachData(responce.data.results);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const click = () => {
  //   console.log('details', details);
  // };

  return (
    <div onClick={() => handleClick(id)} className={active == id ? 'figure active' : 'figure'}>
      <div className="figure__img">
        <img src={set_img_url}></img>
      </div>
      <div className="figure__title">
        <div  className="figure__name">
          {name}
        </div>
      </div>
      <div className="figure__detail">
        <span
          onClick={(e) => {
            e.stopPropagation();
            window.location.replace(`https://rebrickable.com/minifigs/${set_num}/${name}/#parts`);
          }}>
          Show details
        </span>
      </div>
    </div>
  );
};

export default Figure;
