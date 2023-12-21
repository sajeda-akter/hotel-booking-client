import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";


const Rooms = () => {
    const [rooms,setRooms]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/rooms')
        .then(res=>res.json())
        .then(data=>setRooms(data))
    },[])
    console.log(rooms)
    return (
        <div className="w-10/12 mx-auto mt-12">
            
        <div className="grid grid-cols-3 gap-4">
            {
                rooms.map(room=>
                    <div key={room._id} className="card w-96  bg-[#BCEAD5] shadow-xl">
                    <Link to={`/detailpage/${room._id}`}>  <figure className="px-10 pt-10">
    <img src={room.image} alt={room.roomSize} className="rounded-xl w-72 h-52" />
  </figure></Link>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{room.roomSize}</h2>
    <p className="font-bold text-xl">${room.price}</p>
  <Link to={`/detailpage/${room._id}`}>  <div className="card-actions w-48">
      <button className="btn border-2 hover:border-[#704F4F] bg-[#016A70] hover:text-[#472D2D] text-white text-xl w-48">See Details</button>
    </div></Link>
  </div>
</div>
                    )
            }
        </div>
        </div>
    );
};

export default Rooms;