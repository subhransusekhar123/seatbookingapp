import React from 'react'
import style from  "./Caraousal.module.css";
import { Link } from 'react-router-dom';

const Carousal = () => {
  return (
    <>
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className={`carousel-inner `} style={{maxHeight:'500px'}}>
    <div className="carousel-item active">
      <Link to="/bookseat">
      <img src="https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg" className="d-block w-100" alt="..." />
      </Link>
    </div>
    <div className="carousel-item">
    <Link to="/bookseat">
      <img src="https://www.looper.com/img/gallery/why-do-movie-posters-reverse-names/intro-1582575430.jpg" className="d-block w-100" alt="..."/>
      </Link>
    </div>
    <div className="carousel-item">
      <Link to="/bookseat">
      <img src="https://dc-cdn.s3-ap-southeast-1.amazonaws.com/dc-Cover-9jfjq6bb4tl2ge68hkgmhmbib6-20160628122339.original.jpeg" className="d-block w-100" alt="..."/>
      </Link>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}

export default Carousal