import { Link } from "react-router-dom";
import "./listitem.css";

const Listitem = ({ image, name, rating, id }) => {
  return (
    <Link to={`/singleshow/${id}`} className="listitem">
      <img src={image} alt={name} />
      <div className="listiteminfo">
        <h4 className="showname">{name}</h4>
        <h4 className="rating">{rating}</h4>
      </div>
    </Link>
  );
};

export default Listitem;
