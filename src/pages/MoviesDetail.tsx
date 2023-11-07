import { React, useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../Components/Header/Header";
import "./MoviesDetail.css";
import { Modal } from "bootstrap";
import Days from "../Components/Tabs/Days";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { movies } from "../DummyFilms.js";

export default function MoviesDetail() {
  const { id } = useParams();
  const [cinemas, setCinemas] = useState([]);
  const [cities, setCities] = useState([]);
  const [movie, setMovie] = useState(movies[0]);
  const navigate = useNavigate();
  const modalRef = useRef();

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/cinemas/all")
      .then((response) => {
        setCinemas(response.data);
        const uniqueCities = [
          ...new Set(response.data.map((cinema) => cinema.city)),
        ];
        setCities(uniqueCities);
      })
      .catch((error) => {
        console.error("Error fetching cinemas:", error);
      });
  }, []);

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
        console.log(selectedCinemas);
      })
      .then(() => setShowModal(false))
      .then(() => {});
  };

  const customStyle = {
    backgroundImage: `url(${movie.image})`,
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
            <div className="col-3">
              <img src={movie.Poster} />
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
              ></button>
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
        <Days selectedCinemas={selectedCinemas} id={id}></Days>
      ) : (
        ""
      )}
    </>
  );
}
