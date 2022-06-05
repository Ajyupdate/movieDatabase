import React, { useEffect, useState } from 'react'

import Fade  from 'react-reveal'
import Modal from 'react-modal'
import Zoom from 'react-reveal/Zoom'

const DEFAULT_PLACEHOLDER_IMAGE =  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";


const Movie = ({ movie}) => {
  
  const [movieInfo, setMovieInfo] = useState(null)

  const openModal = (movieInfo) => {
    setMovieInfo(movieInfo)
    
  }

  const closeModal = () => {
    setMovieInfo(null)
  }
  
  const poster =
      movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
  return (
    <div className='movie' onClick={() => openModal(movie)}>
        <h2>{movie.Title}</h2>
        <div>
            <img
                width="200"
                alt={`The movie titled: ${movie.Title}`}
                src={poster}
            />
        </div>
        <p>({movie.Year})</p>


        {movieInfo && (
            <Modal isOpen={true} onRequestClose={closeModal}>
                <Zoom>
                  <button onClick={closeModal}>
                    X
                  </button>
                  {movieInfo.Title}
                </Zoom>
            </Modal>
        )}
    </div>
  )
}



export default Movie