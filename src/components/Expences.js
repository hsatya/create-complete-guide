import ExpenceItem from "./ExpenceItem";
import "./Expences.css";

function Expences(props) {
  return (
    <div className="expenses">
      <ExpenceItem
        title={props.title}
        amount={props.amount}
        date={props.date}
      />
    </div>
  );
}

export default Expences;
