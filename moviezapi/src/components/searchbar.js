import React,{ useState,useContext } from 'react'
import './searchbar.css';

//context
import ShowsContext from '../context/shows/showsContext';


const Searchbar = () => {

    const [search,setsearch] =useState('');
    const { searchshow } = useContext(ShowsContext);
    
    const searchhandler =(e)=>{
        e.preventDefault();

        searchshow(search);
        
    };
  return (
    <div>
        <form className='search'>
            <input type='text' placeholder='search for movie' value={search} onChange={(e)=> setsearch(e.target.value)}/>
            <button className='btn' onClick={searchhandler}>Search</button>
        </form>
    </div>
  );
};

export default Searchbar;