import { useState } from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

import { Link } from "react-router-dom";

const Rooms = () => {
  const [reviews, setReviews] = useState([]);
  const [rooms, setRooms] = useState([]);

  // all room list data
  useEffect(() => {
    fetch("https://assignment-category-0004-server.vercel.app/rooms")
      .then((res) => res.json())
      .then((data) => setRooms(data));
  }, []);

  // all reviews
  useEffect(() => {
    fetch("https://assignment-category-0004-server.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  // filter by price range
  const handlePriceRange = (e) => {
    const priceRange = parseInt(e.target.value);
    const filteredPrice = rooms.filter((room) => {
      const isInRange = room.price >= 200 && room.price < priceRange;

      if (isInRange) {
        console.log(room.price);
      }

      return isInRange;
    });
  };

  return (
    <div className="lg:w-10/12 w-11/12 mx-auto mt-12">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Room Page</title>
      </Helmet>
      <p className="text-3xl text-center font-medium">
        {" "}
        Our Total Reviews: {reviews.length}
      </p>
      <div className="flex lg:flex-row md:flex-row md:ml-24 flex-col mt-6 items-center lg:ml-24 my-6">
        <h1 className="lg:text-2xl font-medium lg:me-6 mb-3 md:me-4">Filter By Price Range</h1>
        <select
          onChange={handlePriceRange}
          className="select select-bordered w-full max-w-xs"
        >
          <option disabled selected>
            Price Range
          </option>
          <option value="200">200</option>
          <option value="250">250</option>
          <option value="300">300</option>
          <option value="350">350</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-24 lg:grid-cols-3  gap-8">
        {rooms.map((room) => (
          <div key={room._id} className="card w-96 md:w-80  bg-[#BCEAD5] shadow-xl">
            <Link to={`/detailpage/${room._id}`}>
              {" "}
              <figure className="">
                <img
                  src={room.image}
                  alt={room.roomSize}
                  className="rounded-t-xl w-96 h-52 "
                />
              </figure>
            </Link>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{room.roomSize}</h2>
              <p className="font-bold text-xl">${room.price}</p>
              {/* <p className="font-medium">Available:{room.availability===true?'unavailable':'available'}</p> */}
              <Link to={`/detailpage/${room._id}`}>
                {" "}
                <div className="card-actions w-48">
                  <button className="btn border-2 hover:border-[#704F4F] bg-[#016A70] hover:text-[#472D2D] text-white text-xl w-48">
                    See Details
                  </button>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
