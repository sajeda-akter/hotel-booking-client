import axios from "axios";
import { useEffect, useState } from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import { Rating, Star, ThinStar } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { Helmet } from "react-helmet";

const AutoplaySlider = withAutoplay(AwesomeSlider);
const myStyles = {
  itemShapes: Star,
  activeFillColor: "#FFC436",
  inactiveFillColor: "#FFC436",
};

const ReviewShow = () => {
  const [reviews, setReview] = useState([]);


  useEffect(() => {
 
    axios.get("http://localhost:5000/reviews").then((data) => {
        setReview(data.data);
      });
    

  }, []);
  return (
    <div className="w-10/12 mx-auto mt-6 rounded-md ">
       <Helmet>
      <meta charSet="utf-8" />
        <title>Review Page</title>
      </Helmet>
      <h1>Our Clients Review</h1>
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={5000}
        className="bg-transparent"
      >
        {reviews.map((review) => (
          <div
            className="bg-white w-2/4 p-12 text-center rounded-xl "
            key={review._id}
          >
            <img
              src={review.img}
              className="w-24 h-24 rounded-full mx-auto my-4"
              alt=""
            />
            <p>{review.comment.slice(0, 260)}...</p>
            <p className="text-xl font-bold">{review.customer}</p>
            <p>{review.rating}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="14"
              viewBox="0 0 448 512"
            >
              <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
            </svg>
            <p className="lg:ml-32">
              <Rating
                style={{ maxWidth: 250 }}
                value={review.rating}
                itemStyles={myStyles}
              />
            </p>
          </div>
        ))}
      </AutoplaySlider>
    </div>
  );
};

export default ReviewShow;
