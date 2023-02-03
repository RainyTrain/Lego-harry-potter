import '../Styles/Figure.scss';

const Figure = ({ name, set_img_url, set_num }) => {
  return (
    <div className="figure">
      <div className="figure__img">
        <img src={set_img_url}></img>
      </div>
      <div className="figure__title">
        <div className="figure__name">{name}</div>
      </div>
      <div className='figure__detail'>
          <span>Show details</span>
      </div>
    </div>
  );
};

export default Figure;
