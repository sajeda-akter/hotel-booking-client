import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateDate = () => { 
    const booking=useLoaderData()   
    const [startDate, setStartDate] = useState(new Date());
    const date=moment(startDate).format("yyyy-MM-DD")
    const {id}=useParams()
    const updateInfo=booking.find(booked=>booked._id ===id)
    // console.log(bookedUpdate)

   const handleUpdate=(e)=>{
    e.preventDefault()
    const date=e.target.date.value ;
    const upadteDate={
        date
    }
    axios.patch(`http://localhost:5000/booking/${updateInfo._id}`,upadteDate)
    .then(data=>{

       if(data.data.modifiedCount>0){
            Swal.fire({
                title: "Updated!",
                text: "Your booking has been updated.",
                icon: "success",
                timer: 1000,
              });
        }
    })
    
   }
    
    return (
        <div>

    <div className="bg-slate-200 w-3/4 mx-auto px-12 h-96 mt-12 rounded-md">
    <form className="flex items-center  justify-evenly" onSubmit={handleUpdate}>
        <button  className="bg-[#35A29F] p-2 w-32 rounded-md text-white">Sumit</button>
    {/* <DatePicker
            className=" px-3 py-2 mb-3 mt-4"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="yyyy-MM-dd"
            
            name="date"
          /> */}
          <input defaultValue={updateInfo.date} name="date" type="text" >

          </input>
</form>
    
    </div>
        </div>
    );
};

export default UpdateDate;