import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import swal from "sweetalert";
import { OrderContext } from "../../context/OrderContext";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";

const Order = () => {
  const { reload } = useContext(OrderContext);
const [count,setCount] = useState(1);
const [data,setData] = useState('');
const [user] = useAuthState(auth);

const {price} = data;
const totalPrice = price * count;
const {id} = useParams();
console.log(data.name)
useEffect(() => {
  fetch(`https://restaurant-server-day3.onrender.com/getBrakFastInsert/${id}`)
  .then(res => res.json())
  .then(breakfast => setData(breakfast))
},[])

useEffect(() => {
  fetch(`https://restaurant-server-day3.onrender.com/getLunchInsert/${id}`)
  .then(res => res.json())
  .then(lunch => setData(lunch))
},[])
useEffect(() => {
  fetch(`https://restaurant-server-day3.onrender.com/getDinnerInsert/${id}`)
  .then(res => res.json())
  .then(dinner => setData(dinner))
},[])



const handleOnSubmit = () => {
  fetch('https://restaurant-server-day3.onrender.com/postData', {
  method: 'POST',
  body: JSON.stringify({
    name:data.name,
    price:totalPrice,
    quantity:count,
    img:data.img,
    email:user.email
   

  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
  // window.location = window.location.href;
  reload();
  swal({ 
    title: "WOW!",
   text: "Data Added Successfully",
   icon: "success", button: "Ok" });

}



    return (
      <div className="hero min-h-screen lg:mt-10">
  <div className="hero-content flex-col lg:flex-row">
    <img src={data.img} className="max-w-md max-sm:w-80 rounded-lg " />
    <div className="lg:ml-20">
      <h1 className="text-5xl max-sm:text-4xl  font-bold">{data.name}</h1>
      <p className="py-6">{data.descreption}</p>
      <p className="max-sm:text-center text-4xl mb-3">Price: ${totalPrice}</p>
      <div className="max-sm:d-flex max-sm:mx-auto custom-number-input h-10 w-32 mb-10">

  <div className="flex  flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
    <button onClick={() => {count > 1 ?  setCount(count - 1): ''}} data-action="decrement" className=" bg-green-500 text-white hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
      <span  className=" m-auto text-2xl font-thin">−</span>
    </button>
    <div className="flex items-center p-5 border"> <p className="text-2xl">{count}</p></div>
  <button onClick={() => setCount(count + 1)} data-action="increment" className="bg-green-500 text-white hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
    <span className="m-auto text-2xl font-thin">+</span>
  </button>
</div>
</div>


 <div className="max-sm:flex max-sm:justify-center">
 <button onClick={handleOnSubmit} className=" btn bg-green-500 text-white hover:text-black">Order Submit</button>

 </div>
    </div>
  </div>
</div>
    );
};

export default Order;
