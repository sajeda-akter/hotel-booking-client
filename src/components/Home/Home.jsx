// import Banner from "./HomePageDetails/Banner";

import { Helmet } from "react-helmet";


const Home = () => {
  
    // bg-[#E1ECC8]
    return (
        <div  className="  w-11/12 my-12 mx-auto">
              <Helmet>
    <meta charSet="utf-8" />
      <title>Home Page</title>
    </Helmet>

            {/* <Banner/> */}
        </div>
    );
};

export default Home;