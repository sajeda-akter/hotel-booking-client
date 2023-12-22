import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import moment from 'moment';

const MyBooking = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBooking] = useState([]);
  // const now = moment();
  // const tomorrow = moment().add(1, 'day');
  // const date=bookings.map(book=>book.date)
// const yesterday = moment().subtract(1, 'day');
// console.log(date)
// console.log(yesterday._d)
// console.log(tomorrow,yesterday)
  useEffect(() => {
    axios
      .get(`http://localhost:5000/booking?email=${user?.email}`)
      .then((result) => {
        setBooking(result.data);
      });
  }, [user.email]);
console.log(bookings)
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      
      if (result.isConfirmed) {
        axios.delete(`http://localhost:5000/booking/${_id}`).then((data) => {
          if (data.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your booking has been deleted.",
              icon: "success",
              timer: 1000,
            });
            const remainging=bookings.filter(booking=>booking._id !=_id)
          setBooking(remainging)
          }
          
        });
      }
    });
  };
  return (
    <div className="w-3/4 mx-auto my-12 text-center ">
      <h1 className="text-2xl font-medium text-center my-6">
       You have been booking:{bookings.length}
      </h1>
      <div className="overflow-x-auto ">
        <table className="table">
          {/* head */}
          <thead className="text-xl bg-gray-200">
            <tr>
              <th></th>
              <th>Room</th>
              <th>Price</th>
              <th>Date</th>
              <th>Status Change</th>
              <th>Booking Status</th>
            </tr>
          </thead>
          <tbody className="text-xl bg-gray-100">
            {/* row 1 */}
            {bookings.map((booking, i) => (
              <tr key={booking._id}>
                <th>{i+1}</th>
                <td>{booking.roomSize}</td>
                <td>${booking.price}</td>
                <td>{booking.date}</td>
                <td>
                  {" "}
                  <button className="border-2 border-[#016A70] hover:bg-[#35A29F] w-24 text-center rounded-md px-1 py-2 hover:text-[#FFFBF5]">
                    Edit
                  </button>
                </td>
                <td>
                  {" "}
                  <button
                    onClick={() => handleDelete(booking._id)}
                    className="border-2 border-[#016A70] hover:bg-[#35A29F] w-24 text-center rounded-md px-1 py-2 hover:text-[#FFFBF5]"
                  >

                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBooking;
