

const Banner = () => {
  return (
  <div>
    <div className="hero min-h-screen bg-red-100 text-white my-5 rounded-md">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img  src="https://media.istockphoto.com/id/1491352519/photo/traditional-wooden-house-of-the-kalasha-people.webp?b=1&s=170667a&w=0&k=20&c=uqF6oclOQVl76HIHjzOpnVGm7Ff2B4M5o0CMT1wgkDY=" className="lg:w-2/4 rounded-lg " />
    <div className="">
     
     <div className="flex gap-5 flex-col-reverse">
      <div className="flex gap-4">
      <img className="lg:w-44 lg:h-44 w-24 h-24 rounded-sm" src="https://i.ibb.co/3WJdP76/Ski-Chalet.webp" alt="" />
      <img className="lg:w-44 lg:h-44 w-24 h-24 rounded-sm"  src="https://i.ibb.co/kGFhV1R/Executive.webp" alt="" />
      <img className="lg:w-44 lg:h-44 w-24 h-24 rounded-sm lg:me-16"  src="https://media.istockphoto.com/id/1353140785/photo/christmas-celebration-at-cozy-cottage.webp?b=1&s=170667a&w=0&k=20&c=GDqH_gPsB23H6W6bTXIDUIg8t-ugSp8hc1Aqm0gkRzk=" alt="" />
      </div>
     </div>
   <div>
   <p className="text-teal-900 text-3xl text-center mt-5">35% discount for
        <br /><span className="font-extrabold ">Bijoy Dibosh</span>
      </p>
      <p className="text-teal-900 text-2xl ml-12 mt-6">Offer Facilities</p>
      <ul className="text-teal-900 ml-12 px-6">
        <li>1.Fitness Center</li>
        <li>2.Business Center</li>
        <li>3.Pool side</li>
        <li>4.Free snack </li>
      </ul>
   </div>
    </div>
  </div>
</div>
  </div>
  );
};

export default Banner;
