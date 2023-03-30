import React from 'react';
import { useEffect,useContext } from 'react';
import "./singlepage.css";

//context
import ShowsContext from '../context/shows/showsContext';

const Singlepage = ({match}) => {
  const {getsingleshow,singleshow,loading}=useContext(ShowsContext);

  useEffect(()=>{
    getsingleshow(match.params.id);

    //eslint disable

    
  },[]);

  const removeTags = (text) => {
    if (text === null || text === "") {
      return false;
    } else {
      text = text.toString();
    }
    return text.replace(/(<([^>]+)>)/gi, "");
  };


  return(
    <>
      {loading ? <h2>loading...</h2>:
      <div className='singleshow'>
        <img src={singleshow.image ? singleshow.image.medium : "https://images.wondershare.com/pdfelement/forms-templates/medium/movie-poster-template-3.png"} alt={singleshow.name}/>
        <div className='singlshowinfo'>
          <h1>
            {singleshow.name}
          </h1>
          {singleshow.gernes&&singleshow.gernes.map(gernes =>(
            <span key ={gernes} className="genres">{gernes}</span>
          ))}
          <p>
            <strong>Status: </strong> {singleshow.status && singleshow.status}
          </p>
          <p>
            <strong>Rating: </strong> {singleshow.rating ? singleshow.rating.average:"No Rating..."}
          </p>
          <p>
            <strong>Official Site: </strong> {singleshow.officialSite ? (<a href={singleshow.officialSite} target="_blank" rel='noreferrer'>LINK</a>):"No Official Site"}
          </p>
          <p className='summary'>
            {singleshow.summary && removeTags(singleshow.summary)}
          </p>
        </div>
      </div>
      }
    </>
  )
}

export default Singlepage;