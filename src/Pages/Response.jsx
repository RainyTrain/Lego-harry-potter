import { useNavigate } from 'react-router-dom';

export const Response = () => {
  const navigate = useNavigate();
  return (
    <div className="response">
      <div>
        <h1 style={{color: 'white'}}>All information was sent!</h1>
        <button onClick={() => navigate('/')}>Homepage</button>
      </div>
    </div>
  );
};
