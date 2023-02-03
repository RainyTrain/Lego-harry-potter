import Summary from "../Components/Summary"


const Order = () => {
    return (
        <div className="order">
            <div className="order__form"></div>
            <div className="order__summary">
                <Summary />
            </div>
        </div>
    )
}

export default Order