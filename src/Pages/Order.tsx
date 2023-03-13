import ShipingForm from '../Components/ShipingForm';
import Summary from '../Components/Summary';

const Order = () => {
  return (
    <div className="order">
      <div className="order__form">
        <ShipingForm />
      </div>
      <div className="order__summary">
        <Summary />
      </div>
    </div>
  );
};

export default Order;
