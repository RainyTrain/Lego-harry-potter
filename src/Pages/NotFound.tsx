import Button from '../UI/Button/Button';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not_found">
      <div className="not_found__title">NOT FOUND</div>
      <Link style={{textDecoration: 'none'}} to='/'>
        <Button>Home</Button>
      </Link>
    </div>
  );
};

export default NotFound;
