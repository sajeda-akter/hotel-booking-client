import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import moment from "moment";

const Reviews = () => {
  const { user } = useContext(AuthContext);
  const [bookings,setBookings]=useState([])
    const email=bookings.map(booking=>booking.email=== user?.email)
    console.log(email)

  const [currentTimestamp, setCurrentTimestamp] = useState(null);
  useEffect(()=>{

    axios.get('http://localhost:5000/booking')
    .then(data=>setBookings(data.data))

  },[])
console.log(bookings)
  // useEffect(() => {
  //   // Function to get the current timestamp
  //   const getCurrentTimestamp = () => {
  //     const timestamp = new Date();
  //     setCurrentTimestamp(timestamp);
  //   };

  //   // Call the function when the component mounts
  //   getCurrentTimestamp();

  //   const intervalId = setInterval(getCurrentTimestamp, 1000);

  //   // Clean up the interval when the component unmounts
  //   return () => clearInterval(intervalId);
  // }, []);

  const handleReview = (e) => {
    e.preventDefault();

    const rating = e.target.rating.value;
    const comment = e.target.comment.value;
    const date = e.target.date.value;
    const customer = e.target.user.value || user.displayName;

    const addReview = {
      customer,
      img:user.photoURL,
      rating,
      comment,
      date,
    };
    if(email){
      axios.post('http://localhost:5000/reviews',addReview)
      .then(data=>{
         if(data.data.insertedId){
          Swal.fire({
              position: "center",
              icon: "success",
              title: "Successfully add a review",
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
        title: "You have to booking first",
        showConfirmButton: false,
        timer: 1000,
      });

    }
    e.target.user.value = "";
    e.target.rating.value = "";
    e.target.comment.value = "";
    e.target.date.value=''
  };

  return (
    <div className="">
      <p>Current Timestamp: </p>

      <h1 className="text-2xl font-bold text-center mt-12 mb-4">
        {" "}
        Add To your review
      </h1>
      <div className=" bg-slate-200 card shrink-0 w-3/4 mx-auto  shadow-xl ">
        <form className="card-body grid grid-cols-2 " onSubmit={handleReview}>
          <div className="form-control ">
            <label className="label">
              <span className="label-text text-xl font-medium">UserName</span>
            </label>
            <input
              type="text"
              defaultValue={user?.displayName}
              name="user"
              placeholder="User name"
              className=" w-full input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-medium">Rating</span>
            </label>
            <input
              type="text"
              name="rating"
              placeholder="Give me some rating 10/10"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-medium">Comment</span>
            </label>
            <input
              type="text"
              placeholder="Enter your comments"
              name="comment"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-medium">Timestamp</span>
            </label>
            <input
              type="text"
              placeholder="Date"
              name="date"
              defaultValue={moment().format("MMM Do yyyy")}
              readOnly
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6 col-span-2 w-2/4 mx-auto">
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Reviews;
