import { React, useState, useEffect, useRef } from "react";
// import { useParams } from "react-router-dom";
import { useParams, useNavigate, HashRouter } from "react-router-dom";
import axios from "axios";
import Header from "../Components/Header/Header";
import "./MoviesDetail.css";
import { Modal } from "bootstrap";
import Days from "../Components/Tabs/Days";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { movies } from "../DummyFilms.js";
import { useQuery, useMutation } from "react-query";
import { fetchMovieById, fetchCinemas } from "../utils/fetch.js";

export default function MoviesDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [cinemas, setCinemas] = useState([]);
  const [cities, setCities] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMovieById(id)
      .then((movie) => {
        setMovie(movie);
        console.log("Movie details:", movie);
        // Handle movie details here
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    // Call the fetchCinemas function to get cinemas data
    fetchCinemas()
      .then((response) => {
        setCinemas(response);
        const uniqueCities = [
          ...new Set(response.map((cinema) => cinema.city)),
        ];
        setCities(uniqueCities);
      })
      .catch((error) => {
        console.error("Error fetching cinemas:", error);
      });
  }, [id]);

  const modalRef = useRef();

  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    const bsModal = modalRef.current;
    let modal = Modal.getInstance(bsModal);

    if (!modal) {
      modal = new Modal(bsModal);
      modal.hide();
    } else {
      showModal ? modal.show() : modal.hide();
    }
  }, [showModal]);

  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedCinemas, setSelectedCinemas] = useState([]);

  const openModal = () => {
    setShowModal(true);
  };

  const HandleCity = (el) => {
    setSelectedCity(el);
  };

  const HandleCinemas = (el) => {
    Promise.resolve()
      .then(() => {
        selectedCinemas.push(el);
        setSelectedCinemas(selectedCinemas);
      })
      .then(() => setShowModal(false));
  };

  const customStyle = {
    // backgroundImage: `url(${movie.Images[0]})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "absolute",
    left: "0",
    width: "100%",
    height: "100%",
    opacity: "0.8",
    zIndex: "-1",
    filter: "blur(2px)",
  };
  return (
    <>
      <Header />
      <div className="cs-container">
        <div className="movie-overlay" style={customStyle}></div>
        <div
          className="container d-flex justify-content-center align-items-center"
          style={{ height: "100%" }}
        >
          <div
            className="row justify-content-between text-start"
            style={{ width: "100%" }}
          >
            <div className="col-3 max-w-24">
              <img src={movie.Poster} className="img-sizes" />
            </div>
            <div className="col-9 d-flex justify-content-between flex-column">
              <h1 className="text-black">{movie.Title}</h1>
              <h3 className="text-black">Yönetmen: {movie.Director}</h3>
              <div className="d-flex justify-content-between">
                <a className="cs-btn first-btn text-black" href="#buyTicket">
                  Bilet Al
                </a>
                <a className="cs-btn">Fragman</a>
                <a className="cs-btn">Yorum Yap</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-3">
        <div className="row text-start">
          <div className="col-3">
            <p>
              <strong>Vizyon Tarihi:</strong> {movie.Released}
            </p>
            <p>
              <strong>Süre</strong>: {movie.Runtime}{" "}
            </p>
            <p>
              <strong>Tür:</strong> {movie.Genre}
            </p>
          </div>
          <div className="col-9">
            <strong>Özet :</strong> {movie.Plot}
          </div>
        </div>
      </div>

      <div
        id="buyTicket"
        className="d-flex container mt-5 mb-5 justify-content-evenly cs-style"
      >
        <div>
          <h3>Bilet Al</h3>
          <p>Sinema Seç</p>
        </div>
        <div className="input" onClick={openModal}>
          Sinema Seç
          <FontAwesomeIcon icon={faSort} />
        </div>
      </div>

      <div className="modal" tabIndex="-1" id="exampleModal" ref={modalRef}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                {selectedCity ? selectedCity : "Sinema Seçiniz"}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              {selectedCity
                ? cinemas
                    .filter((cinema) => cinema.city === selectedCity)
                    .map((cinema) => (
                      <li key={cinema.id} onClick={() => HandleCinemas(cinema)}>
                        {cinema.name}
                      </li>
                    ))
                : cities.map((city, index) => (
                    <li key={index} onClick={() => HandleCity(city)}>
                      {city}
                    </li>
                  ))}
            </div>
          </div>
        </div>
      </div>

      {selectedCinemas.length > 0 ? (
        <Days
          selectedCinemas={selectedCinemas}
          id={id}
          filmName={movie.Title}
        />
      ) : (
        ""
      )}
    </>
  );
}
