import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import axios from "axios";

const MyBooking = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBooking] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/booking?email=${user?.email}`)
      .then((result) => {
        setBooking(result.data);
      });
  }, [user.email]);
  return (
    <div className="w-3/4 mx-auto my-12 text-center ">
      <h1 className="text-2xl font-medium text-center my-6">
        All of my booking
      </h1>
      <div className="overflow-x-auto ">
        <table className="table">
          {/* head */}
          <thead className="text-xl ">
            <tr>
              <th></th>
              <th>Room</th>
              <th>Price</th>
              <th>Status Change</th>
              <th>Booking Status</th>
            </tr>
          </thead>
          <tbody className="text-xl">
            {/* row 1 */}
            {bookings.map((booking, i) => (
              <tr key={booking._id}>
                <th>{i}</th>
                <td>{booking.roomSize}</td>
                <td>${booking.price}</td>
                <td>
                  {" "}
                  <button className="border-2 border-[#016A70] hover:bg-[#35A29F] w-24 text-center rounded-md px-1 py-2 hover:text-[#FFFBF5]">
                    Edit
                  </button>
                </td>
                <td>
                  {" "}
                  <button className="border-2 border-[#016A70] hover:bg-[#35A29F] w-24 text-center rounded-md px-1 py-2 hover:text-[#FFFBF5]">
                    confirm
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
