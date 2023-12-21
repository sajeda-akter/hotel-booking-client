import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import axios from "axios";

const MyBooking = () => {
    const {user}=useContext(AuthContext)
    const [bookings,setBooking]=useState([])
    useEffect(()=>{
        axios.get(`http://localhost:5000/booking?email=${user?.email}`)
        .then(result=>{
            setBooking(result.data)
        })
    

    },[user.email])
    console.log(bookings)
    return (
        <div className="w-2/4 mx-auto my-12">
            <h1 className="text-2xl font-medium text-center my-6">All of my booking</h1>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
        bookings.map((booking,i)=>
            <tr key={booking._id}>
            <th>{i}</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
          </tr>
            )
     }
     
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyBooking;