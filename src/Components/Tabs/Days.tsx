import React, { useState, useEffect } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { useNavigate, HashRouter } from "react-router-dom";
import "./Days.css";

const Days = ({ selectedCinemas, id, filmName }) => {
  const navigate = useNavigate();
  const [key, setKey] = useState();
  const [days, setDays] = useState([]);

  const HandleDate = () => {
    const days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const today = new Date();
    let currentDay = today.getDay();
    let currentDate = today.getDate();
    let currentMonth = today.getMonth();

    if (currentDay === 0) {
      currentDay = 7;
    }

    let dayCount = daysInMonth(currentMonth + 1, 2022);

    function daysInMonth(month, year) {
      return new Date(year, month, 0).getDate();
    }
    console.log(dayCount);
    const calender = [];
    calender.push({
      day: days[currentDay - 1],
      date: currentDate,
      month: months[currentMonth],
    });
    console.log(months[currentMonth], currentMonth);
    for (let i = 0; i < 6; i++) {
      if (currentDay > 6) {
        currentDay = 0;
      }
      calender.push({
        day: days[currentDay],
        date: currentDate < dayCount ? ++currentDate : (currentDate = 1),
        month:
          currentDate === 1 && currentMonth < 11
            ? months[++currentMonth]
            : currentMonth === 11
            ? months[0]
            : months[currentMonth],
      });
      currentDay++;
    }
    console.log(calender);
    return calender;
  };
  useEffect(() => {
    const days = HandleDate();
    setDays(days);
    setKey(days[0].day);
  }, []);

  const HandleBuyTicket = (element, e) => {
    const cinemaId = selectedCinemas[0].id;
    const hour = e.target.innerText.replace(".", ":").replace(":", ":");

    navigate(`/buy/${id}/${cinemaId}/${hour}`, {
      state: { date: element.date, month: element.month },
    });
  };

  return (
    <div className="container">
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        {days.map((element, index) => (
          <Tab
            eventKey={element.day}
            key={index}
            title={`${element.date} ${element.month} ${element.day}`}
            className="text-start"
          >
            <button
              type="button"
              className="btn btn-outline-secondary me-2"
              onClick={(e) => HandleBuyTicket(element, e)}
            >
              13.00
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary me-2"
              onClick={(e) => HandleBuyTicket(element, e)}
            >
              16.00
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary me-2"
              onClick={(e) => HandleBuyTicket(element, e)}
            >
              20.00
            </button>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
};

export default Days;
