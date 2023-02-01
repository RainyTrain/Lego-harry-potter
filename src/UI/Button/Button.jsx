import './Button.scss';

const Button = ({ children }) => {
  return (
    <button className="button">
      <span className="button__title">{children}</span>
    </button>
  );
};

export default Button;
