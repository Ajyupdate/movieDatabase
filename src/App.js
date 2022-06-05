import React, { useEffect, useState, useReducer } from 'react'
import Header from "./Header"
import Movie from './Movie' 
import Search from './Search'

const MOVIE_API_URL = "https://www.omdbapi.com/?s=swallow&apikey=4a3b711b"


const initialtState = {
  loading: true,
  movies: [],
  errorMessage: null
}

const reducer = (state, action) =>{
  switch(action.type){
    case "SEARCH_MOVIE_SUCCESS":
      return {
        ...state,
        loading: true,
        errorMessage: null
      };

    case "SEARCH_MOVIES_SUCCESS":
      return {
        ...state,
        loading: false,
        movies: action.payload
      };
      
    case "SEARCH_MOVIES_FAILURE":
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      };
    default:
      return state;  
  }
}
const App = () => {
   const [state, dispatch] = useReducer(reducer, initialtState)

   useEffect(() =>{

    fetch(MOVIE_API_URL)
      .then(response => response.json())
      .then(jsonResponse => {
        
        dispatch({
          type: "SEARCH_MOVIES_SUCCESS",
          payload: jsonResponse.Search
        });
      });
   }, []);
  // const [loading, setLoading] = useState(true);
  // const [movies, setMovies] = useState([])
  // const [errorMessage, setErrorMessage] = useState(null)
  // const [Title, setTitle] = useState([])
  
  // useEffect(() => {
  //   fetch(MOVIE_API_URL)
  //     .then(response => response.json())
  //     .then(jsonResponse => {
  //       setMovies(jsonResponse.Search)
  //       setLoading(false);
  //     })
  // }, [])

  // const search = searchValue => {
  //   setLoading(true);
  //   setErrorMessage(null);

  //   fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
    
  //     .then(response => {
  //       if(!response.ok){
  //         throw Error("could not get list check your internet setting")
  //       }
  //       return response.json()
  //     })
  //     .then(jsonResponse => {
  //       setMovies(jsonResponse.Search);
  //       console.log(jsonResponse.Search)
  //       setLoading(false)
  //       setErrorMessage(null)
  //       jsonResponse.Search.map((movie) => (
  //         console.log(setTitle(movie.Title))
  //       ) )
  //     })
      
  //     .catch(err => {
  //       setLoading(false)
  //       setErrorMessage("could not reach list: check your internet connection")
  //     })
  // }

  const search = searchValue => {
    dispatch({
      type: "SEARCH_MOVIES_REQUEST"
    });

    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
    
      .then(response => response.json())
      
      .then(jsonResponse => {
        //console.log(jsonResponse)
        if(jsonResponse.Response === "True"){
          dispatch({
            type: "SEARCH_MOVIES_SUCCESS",
            payload: jsonResponse.Search
          })
        }else {
          dispatch({
            type: "SEARCH_MOVIES_FAILURE",
            error: jsonResponse.Error
          })
        }
        
      })
  }

  const { movies, errorMessage, loading } = state;

  return (
    <div className='App'>
      <Header text="HOOKED"></Header>
      <Search search={search}/>
      <p className='App-intro'>Sharing a few of my favorite movies</p>
      
      
      <div className='movies'>
        
        {loading && !errorMessage ? (
          <span>loading...</span>
        ) : errorMessage ? (
          <div className='errorMessage'>{errorMessage}</div>
        ) : (
          movies.map((movie, index) => (
            <Movie key={`${index} -${movie.Title}`} movie={movie} />
          ))
        )}
      </div>

    </div>
  )
}

export default App