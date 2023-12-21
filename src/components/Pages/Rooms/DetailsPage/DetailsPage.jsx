import axios from "axios";
import { useContext } from "react";
import { useLoaderData,  } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";

const DetailsPage = () => {
    const {user}=useContext(AuthContext)

    const rooms=useLoaderData();
    const {_id,image,description,roomSize,specialOffer,availability,price}=rooms
//  console.log(rooms.availability)
const handleBooking=()=>{
    if(availability ===true){
        const newBooking={
            image,roomSize,price,specialOffer,roomId:_id,customer:user.displayName,email:user.email
        }
        axios.post('http://localhost:5000/booking',newBooking)
        .then(data=>{
         if(data.data.insertedId){
            
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Successfully booking",
            showConfirmButton: false,
            timer: 1000,
          });
         }
        })
    }
    else{
     
        Swal.fire({
            position: "center",
            icon: "error",
            title: "It's unavailable now",
            showConfirmButton: false,
            timer: 1000,
          });
    }
}
    return (
        <div className="card w-10/12 mx-auto mt-4 text-purple-700 bg-gray-300 shadow">
        <figure className="px-10 pt-10">
          <img src={image} alt={roomSize}  className="w-11/12 h-96 rounded-xl" />
        </figure>
        <div className="card-body ml-16">
          <div className="flex justify-between items-center space-x-44">
          <h2 className="card-title text-3xl font-bold">{roomSize}</h2>
          <p className="text-2xl font-medium">Price Per Night: <span className="font-extrabold">${price}</span></p>
         
          </div>
          <p className="text-xl">{description}...</p>
          <p className="text-xl font-bold">Special Offer: <span className="font-medium">{specialOffer}</span></p>
          <p className="text-xl">Available:{availability}</p>
          <div className="card-actions mx-auto w-3/4 navbar-center mt-4">
            <button className="btn w-2/4 mx-auto btn-primary" onClick={handleBooking}>Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default DetailsPage;