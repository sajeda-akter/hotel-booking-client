import axios from "axios";
import { useContext, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import BookkingConfirmModal from "./BookkingConfirmModal/BookkingConfirmModal";
// moment().format();

const DetailsPage = () => {
  const [startDate, setStartDate] = useState(new Date());

  const rooms = useLoaderData();
  const { image, description, roomSize, specialOffer, availability, price } =
    rooms;

  // Modal States
  const [isBuyModalOpen, setIsBuyModalOpen] = useState(false);
  const onCloseBuyModal = () => {
    setIsBuyModalOpen(false);
  };

  return (
    <div className="card w-10/12 mx-auto mt-4  bg-gray-300 shadow">
      <figure className="px-10 pt-10">
        <img src={image} alt={roomSize} className="w-11/12 h-96 rounded-xl" />
      </figure>
      <div className="card-body ml-16">
        <div className="flex justify-between items-center space-x-44">
          <h2 className="card-title text-3xl font-bold">{roomSize}</h2>
          <p className="text-2xl font-medium">
            Price Per Night: <span className="font-extrabold">${price}</span>
          </p>
        </div>
        <p className="text-xl">{description}...</p>
        <p className="text-xl font-bold">
          Special Offer: <span className="font-medium">{specialOffer}</span>
        </p>
        <p className="text-xl">
          Available:{availability === true ? "unavailable" : "available"}
        </p>
        <p className="text-xl">
          {" "}
          Booking Date:{" "}
          <DatePicker
            className="w-52 rounded-md pl-3"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="dd/MM/yyyy"
          />
        </p>
        <div className="card-actions mx-auto w-3/4 navbar-center mt-4">
          {/* You can open the modal using document.getElementById('ID').showModal() method */}
          <button className="btn" onClick={() => setIsBuyModalOpen(true)}>
        View Before Confirm
          </button>

          <BookkingConfirmModal
            isBuyModalOpen={isBuyModalOpen}
            setIsBuyModalOpen={setIsBuyModalOpen}
            onCloseBuyModal={onCloseBuyModal}
            rooms={rooms}
            startDate={startDate}
          />
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
