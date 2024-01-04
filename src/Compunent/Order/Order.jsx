import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import swal from "sweetalert";

const Order = () => {
const [count,setCount] = useState(1);
const [data,setData] = useState('');

const {price} = data;
const totalPrice = price * count;
const {id} = useParams();
console.log(data.name)
useEffect(() => {
  fetch(`http://localhost:5000/getBrakFastInsert/${id}`)
  .then(res => res.json())
  .then(breakfast => setData(breakfast))
},[])

useEffect(() => {
  fetch(`http://localhost:5000/getLunchInsert/${id}`)
  .then(res => res.json())
  .then(lunch => setData(lunch))
},[])
useEffect(() => {
  fetch(`http://localhost:5000/getDinnerInsert/${id}`)
  .then(res => res.json())
  .then(dinner => setData(dinner))
},[])



const handleOnSubmit = () => {
  fetch('http://localhost:5000/postData', {
  method: 'POST',
  body: JSON.stringify({
    name:data.name,
    price:totalPrice,
    quantity:count,
    img:data.img
   

  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
  swal({ 
    title: "WOW!",
   text: "Data Added Successfully",
   icon: "success", button: "Ok" });

}


    return (
      <div className="hero min-h-screen lg:mt-10">
  <div className="hero-content flex-col lg:flex-row">
    <img src={data.img} className="max-w-md rounded-lg " />
    <div className="lg:ml-20">
      <h1 className="text-5xl font-bold">{data.name}</h1>
      <p className="py-6">{data.descreption}</p>
      <p className="text-4xl mb-3">Price: ${totalPrice}</p>
      <div className="custom-number-input h-10 w-32 mb-10">

  <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
    <button onClick={() => {count > 1 ?  setCount(count - 1): ''}} data-action="decrement" className=" bg-green-500 text-white hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
      <span  className=" m-auto text-2xl font-thin">−</span>
    </button>
    <div className="flex items-center p-5 border"> <p className="text-2xl">{count}</p></div>
  <button onClick={() => setCount(count + 1)} data-action="increment" className="bg-green-500 text-white hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
    <span className="m-auto text-2xl font-thin">+</span>
  </button>
</div>
</div>


      <button onClick={handleOnSubmit} className="btn bg-green-500 text-white hover:text-black">Order Submit</button>

    </div>
  </div>
</div>
    );
};

export default Order;
