import "./ExpenceItem.css";

function ExpenceItem(props) {
  const expenceDate = new Date(2022, 0, 1);
  const expenceTitle = "Car Insurance";
  const expeneceAmount = 294.67;

  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenceItem;
