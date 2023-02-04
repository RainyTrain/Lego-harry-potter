import '../Styles/Figure.scss';

const Figure = ({ name, set_img_url, set_num, id, handleClick, active }) => {
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
