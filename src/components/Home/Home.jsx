import Banner from "./HomePageDetails/Banner";
import { Helmet } from "react-helmet";
import Gallery from "./HomePageDetails/Gallery";

import Footer from "./Footer/Footer";
import FeaturedRoom from "./HomePageDetails/FeaturedRoom/FeaturedRoom";
import UserTestimonial from "./HomePageDetails/Testimonial/UserTestimonial";
import TextAnimation from "./HomePageDetails/TextAnimation";
import { Link } from "react-router-dom";
import About from "./HomePageDetails/About/About";

const Home = () => {
  

  return (
    <div className="  w-11/12 mt-12 mx-auto">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home Page</title>
      </Helmet>
     
    <TextAnimation/>
      <Banner />
   <About/>
      <FeaturedRoom/>
      <Gallery />
    <UserTestimonial/>
      <Footer />
    </div>
  );
};

export default Home;
