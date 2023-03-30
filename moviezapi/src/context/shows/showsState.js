//action handler

import { useReducer } from "react";
import ShowsContext from "./showsContext";
import axios from "axios";
import ShowsReducer from "./showsReducer";
import {
  SEARCH_SHOWS,
  SET_LOADING,
  SET_SINGLE_SHOW,
  CLEAR_SINGLE_SHOW,
} from "../types";

const ShowsState = (props) => {
  const initialState = {
    shows: [],
    singleshow: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(ShowsReducer, initialState);

  const searchshow = async (search) => {
    dispatch({ type: SET_LOADING });

    //axios

    const { data } = await axios.get(
      `http://api.tvmaze.com/search/shows?q=${search}`
    );

    console.log(data);

    dispatch({
      type: SEARCH_SHOWS,
      payload: data,
    });
  };

  const getsingleshow = async (id) => {
    dispatch({
      type: SET_LOADING,
    });

    const {data} = await axios.get(`http://api.tvmaze.com/shows/${id}`);

    dispatch({
      type: SET_SINGLE_SHOW,
      payload: data,
    });
  };

  const clearsingleshow = () => {
    dispatch({
      type: CLEAR_SINGLE_SHOW,
    });
  };

  return (
    <ShowsContext.Provider
      value={{
        shows: state.shows,
        singleshow: state.singleshow,
        loading: state.loading,
        searchshow,
        getsingleshow,
        clearsingleshow,
      }}
    >
      {props.children}
    </ShowsContext.Provider>
  );
};

export default ShowsState;
