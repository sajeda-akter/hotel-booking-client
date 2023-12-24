import Banner from "./HomePageDetails/Banner";

import { Helmet } from "react-helmet";
import Gallery from "./HomePageDetails/Gallery";


const Home = () => {
  
    // bg-[#E1ECC8]
    return (
        <div  className="  w-11/12 my-12 mx-auto">
              <Helmet>
    <meta charSet="utf-8" />
      <title>Home Page</title>
    </Helmet>

            <Banner/>
            <Gallery/>
        </div>
    );
};

export default Home;