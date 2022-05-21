import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



const MovieList = () => {
    const select = useSelector(state => state.movieSlicer.movies)
    console.log(select)
  return (
    <div className="container">
        <div className="row m-5">
            {
                select.map((item)=>{
                    return (
                        <div className="col-4">
                    <Link to="/bookseat">
                            <img src={item.Poster} alt="" style={{width:"300px",}} />
                            <h3>{item.Title}</h3>

                    </Link>
                        </div>

                    )
                })
            }
           
           
        </div>
    </div>
  )
}

export default MovieList