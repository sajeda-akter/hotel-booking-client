import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../../../AuthProvider/AuthProvider";
import moment from "moment";

const BookkingConfirmModal = ({
  isBuyModalOpen,
  setIsBuyModalOpen,
  onCloseBuyModal,
  rooms,
  startDate,
}) => {

  const { user } = useContext(AuthContext);
  // const [startDate, setStartDate] = useState(new Date());
  const {
    _id,
    image,
    roomSize,
    specialOffer,
    price,
  } = rooms;
  const [book, setBook] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/booking")
      .then((res) => res.json())
      .then((data) => {
        setBook(data);
      });
  }, []);

  const idCheck = book.find((bk) => bk.roomId === rooms._id);
  const date=moment(startDate).format("yyyy-MM-DD")

  //  console.log(rooms.availability)
  const handleBooking = () => {
    if (!idCheck) {
      const newBooking = {
        image,
        roomSize,
        price,
        date,
        specialOffer,
        roomId: _id,
        customer: user.displayName,
        email: user.email,
      };
      axios.post("http://localhost:5000/booking", newBooking).then((data) => {
        if (data.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Successfully booking",
            showConfirmButton: false,
            timer: 1000,
          });
          setIsBuyModalOpen(false);
        }
      });
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "It's already booked ",
        showConfirmButton: false,
        timer: 1000,
      });
    }
  };

  return (
    <div>
      <dialog
        id="bookingModal"
        className="modal "
        open={isBuyModalOpen}
        onClose={onCloseBuyModal}
      >
        <div className="modal-box ">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">{roomSize}</h3>
          <p className="py-4 font-extrabold">{price}</p>
          <p>{specialOffer}</p>
          <p>{moment(startDate).format("yyyy-MM-DD")}</p>
          <button
            className="btn w-2/4 mx-auto btn-primary"
            onClick={handleBooking}
          >
            Buy Now
          </button>
        </div>
      </dialog>
    </div>
  );
};

export default BookkingConfirmModal;
