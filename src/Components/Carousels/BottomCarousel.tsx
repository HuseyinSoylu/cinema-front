import { React, useEffect, useState } from "react";
import "./BottomCarousel.css";
import { useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import { movies as dummyfilms } from "../../DummyFilms.js";
import { useQuery } from "react-query";
import { fetchMovies } from "../../utils/fetch.ts";

const BottomCarousel = () => {
  const [movies, setMovies] = useState([]);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5.5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  const {
    data: moviesData,
    isLoading,
    isError,
    error,
  } = useQuery("movies", fetchMovies);

  useEffect(() => {
    if (!isLoading && !isError) {
      setMovies(moviesData);
    }
  }, [moviesData, isLoading, isError]);

  const navigate = useNavigate();

  return (
    <div className="container-fluid mt-5">
      <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <a
            className="nav-link active"
            id="pills-vision-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-vision"
            type="button"
            role="tab"
            aria-controls="pills-visionsoon"
            aria-selected="true"
          >
            Vizyonda
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link"
            id="pills-soon-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-soon"
            type="button"
            role="tab"
            aria-controls="pills-soon"
            aria-selected="false"
          >
            Yakında
          </a>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-vision"
          role="tabpanel"
          aria-labelledby="pills-vision-tab"
        >
          <div className="multiCarousel">
            <Carousel responsive={responsive} autoPlay={false}>
              {movies.map((item, index) => (
                <div
                  className="card"
                  key={index}
                  onClick={() => navigate(`/movie/${item.imdbID}`)}
                >
                  <img
                    className="img-fluid"
                    src={item.Poster}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <a href="#" className="btn btn-dark">
                      Yorum Yap
                    </a>
                    <a href="#" className="btn btn-light">
                      Bilet Al
                    </a>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="pills-soon"
          role="tabpanel"
          aria-labelledby="pills-soon-tab"
        >
          ...
        </div>
      </div>
    </div>
  );
};

export default BottomCarousel;
