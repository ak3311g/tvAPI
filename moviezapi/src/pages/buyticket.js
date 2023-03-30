import React from 'react';
import { useEffect,useContext } from 'react';
import "./buyticket.css";

//context
import ShowsContext from '../context/shows/showsContext';

const Buyticket = ({match}) => {
  const {getsingleshow,singleshow,loading}=useContext(ShowsContext);

  useEffect(()=>{
    getsingleshow(match.params.id);

    //eslint disable
  },[]);
  

  return(
    <>
        <div className='buydetails'>
            <img src={singleshow.image ? singleshow.image.medium : "https://images.wondershare.com/pdfelement/forms-templates/medium/movie-poster-template-3.png"} alt={singleshow.name}/>
            <h1>{singleshow.name}</h1>
            <p>
            <strong>Rating: </strong> {singleshow.rating ? singleshow.rating.average: "No Rating..."}
            </p>
            <button>BUY TICKET NOW</button>
        </div>
    </>
  )

}

export default Buyticket;