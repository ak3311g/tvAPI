import { Link } from "react-router-dom";
import "./buyticketbutton.css";

const Buybutton = ({ image, name, rating, id }) => {
  return (
    <Link to={`/buyticket/${id}`} className="buyticket">
      <span>BUY TICKET</span>
    </Link>
  );
};

export default Buybutton;
