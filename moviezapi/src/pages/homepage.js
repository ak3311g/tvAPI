import { useContext } from "react";
import "./homepage.css";

//context

import ShowsContext from "../context/shows/showsContext";

//conponent
import Searchbar from "../components/searchbar";
import Listitem from "../components/listitem";

const Homepage = () => {
  const showsContext = useContext(ShowsContext);
  const { loading, shows } = showsContext;

  return (
    <div className="homepage">
      {loading ? (
        <h2>Loading</h2>
      ) : (
        <div>
          {shows.map((item) => (
            <Listitem key={item.show.id}
            id={item.show.id}
            image={item.show.image ? item.show.image.medium : "https://images.wondershare.com/pdfelement/forms-templates/medium/movie-poster-template-3.png"}
            name={item.show.name}
            rating ={item.show.rating.average ? item.show.rating.average: "No Rating..."}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Homepage;
