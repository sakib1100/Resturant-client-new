import { useEffect, useState,  } from "react";
import { Link } from "react-router-dom";

const BreakFast = () => {
    const [breakpast,setBreakpast] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/getBrakFast')
        .then(res => res.json())
        .then(data => setBreakpast(data))
    },[])
// const {_id} = BreakFast;


    return (
        <div className="lg:mx-20 max-sm:mx-10">
        <h1>Break Fast for you</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">

    {
    breakpast.map((data) => <div key={data._id} className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">
    <span className="bg-red-100 border border-red-500 rounded-full text-primary text-sm poppins px-4 py-1 inline-block mb-4">Breakfast</span>
    <img className="w-64 mx-auto transform transition duration-300 hover:scale-105" src={data.img} alt="" />
    <div className="flex flex-col items-center my-3 space-y-2">
        <h1 className="text-gray-900 poppins text-lg">{data.name}</h1>
        <p className="text-gray-500 poppins text-sm text-center">Gay one the what walk then she. Demesne mention pr</p>
        <h2 className="text-gray-900 poppins text-2xl font-bold">${data.price}</h2>
        <button  className="bg-green-500 text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105"><Link to={`/order/${data._id}`}>Order Now</Link></button>
    </div>
</div>)
}
       </div>        
       </div> 
    );
};

export default BreakFast;