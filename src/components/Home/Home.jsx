import Banner from "./HomePageDetails/Banner";

import { Helmet } from "react-helmet";
import Gallery from "./HomePageDetails/Gallery";

import Footer from "./Footer/Footer";
import FeaturedRoom from "./HomePageDetails/FeaturedRoom/FeaturedRoom";
import UserTestimonial from "./HomePageDetails/UserTestimonial";
import TextAnimation from "./HomePageDetails/TextAnimation";

const Home = () => {
  
  // bg-[#E1ECC8]
  return (
    <div className="  w-11/12 mt-12 mx-auto">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home Page</title>
      </Helmet>
    <TextAnimation/>
      <Banner />
      <FeaturedRoom/>
      <Gallery />
    <UserTestimonial/>
      <Footer />
    </div>
  );
};

export default Home;
