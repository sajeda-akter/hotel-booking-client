import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/rooms")
      .then((res) => res.json())
      .then((data) => setRooms(data));
  }, []);

  const handlePriceRange=(e)=>{
    const price=parseInt(e.target.value)
    const roomsPrice=rooms.filter(room=>
      room.price<=price 
      )

      setRooms(roomsPrice)
   
  //   for(const perPrice of roomsPrice){
  //     if(price>=perPrice ){
  //       newPrice.push(perPrice)
  //       console.log(perPrice)
  //     }
  //     else if(price>perPrice && newPrice>200){
  //       console.log(perPrice)
  //     }
  //   }
  //   // console.log(newPrice)

  }

  return (
    <div className="w-10/12 mx-auto mt-12">
   <div className="flex items-center ml-24 my-6">
   <h1 className="text-2xl font-medium me-6">Filter By Price Range</h1>
        <select onChange={handlePriceRange} className="select select-bordered w-full max-w-xs">
          <option disabled selected>
           Price Range
          </option>
          <option value="200">200</option>
          <option value="250">250</option>
          <option value="300">300</option>
        </select>
   </div>
  

      <div className="grid grid-cols-3 gap-4">
        {rooms.map((room) => (
          <div key={room._id} className="card w-96  bg-[#BCEAD5] shadow-xl">
            <Link to={`/detailpage/${room._id}`}>
              {" "}
              <figure className="">
                <img
                  src={room.image}
                  alt={room.roomSize}
                  className="rounded-t-xl w-96 h-52"
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
