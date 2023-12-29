import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Lunch = () => {

    const [lunch, setLunch] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/getLuanch')
            .then(res => res.json())
            .then(data => setLunch(data))
            .catch(error => console.error("Error fetching lunch data:", error));
    }, []);

    return (
        <div className="mx-20">
            <h1>Lunch for you {lunch.length}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
                {lunch.map((data) => (
                    <div key={data._id} className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">
                        <span className="bg-red-100 border border-red-500 rounded-full text-primary text-sm poppins px-4 py-1 inline-block mb-4">Lunch</span>
                        <img className="w-64 mx-auto transform transition duration-300 hover:scale-105" src={data.img} alt={data.name} />
                        <div className="flex flex-col items-center my-3 space-y-2">
                            <h1 className="text-gray-900 poppins text-lg">{data.name}</h1>
                            <p className="text-gray-500 poppins text-sm text-center">{data.description}</p>
                            <h2 className="text-gray-900 poppins text-2xl font-bold">${data.price}</h2>
                            <button className="bg-lime-500 text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105"><Link to={`/order/${data._id}`}>Order Now</Link></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Lunch;
