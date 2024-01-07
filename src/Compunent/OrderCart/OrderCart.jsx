import {  useEffect, useState } from "react";
import swal from "sweetalert";
import { OrderContext } from "../../context/OrderContext";
import { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";

const OrderCart = () => {
  const { reload } = useContext(OrderContext);
  const [user] = useAuthState(auth);

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/getPostData?email=${user.email}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
   
  }, []);

  const handleDelete = (id) => {
    const proceed = window.confirm('Are you sure you want to delete this product?');
    if (proceed) {
      const url = `http://localhost:5000/deleteData/${id}`;
      fetch(url, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((datas) => {
          if (datas.deletedCount > 0) {
            console.log('deleted');
            const remaining = data.filter((ur) => ur._id !== id);
            setData(remaining);
            reload();
            swal({ title: "Data Delete!", text: "Data Deleted Successfully", icon: "warning", button: "Ok" });

          }
        })
        .catch((error) => console.error('Error deleting data:', error.message));
    }
  };
  
    // const calculateTotal = () => {
    //     return data.reduce((total, item) => total + item.price);
    //   };
    //   calculateTotal();
  return (
    <body className="" >
      <div className="container mx-auto mt-10">
        <div className="shadow-md my-10">
          <div className="lg:flex justify-center">

            <div className="w-full lg:w-3/4 bg-white px-6 lg:px-10 py-10">
              <div className="flex justify-between border-b pb-8">
                <h1 className="font-semibold text-2xl">Shopping Cart </h1>
                <h2 className="font-semibold text-2xl">{data.length} Items</h2>
              </div>
              <div className="max-sm:hidden flex flex-col mt-10 mb-5 md:flex-row">
                <h3 className=" font-semibold text-gray-600 text-xs uppercase w-full md:w-2/5">Product Details</h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase  w-1/5 text-center">Price</h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
              </div>
              {data.map((item) => (
                <div key={item.id} className="flex bg-green-100 items-center hover:bg-gray-100 -mx-2 md:-mx-8 px-4 md:px-6 py-4 md:py-5">
                  <div className="flex w-full md:w-2/5">
                    <div className="w-20">
                      <img className="h-24 w-24" src={item.img} alt={item.name} />
                    </div>
                    <div className="flex flex-col justify-between ml-4 md:ml-0 md:flex-grow">
                      <span className="font-bold text-sm">{item.name}</span>
                      <span className="text-red-500 text-xs">{item.brand}</span>
                      <a href="#"  onClick={() => handleDelete(item._id)} className="font-semibold text-red-700 hover:text-red-500 text-gray-500 text-xs">Remove</a>
                    </div>
                  </div>
                  <div className="flex justify-center w-1/5">
                    <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                      {/* ... */}
                    </svg>
                 <p>{item.quantity} pc</p>
                    <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                      {/* ... */}
                    </svg>
                  </div>
                  <span className="max-sm:hidden text-center w-1/5 font-semibold text-sm">${item.price.toFixed(2)}</span>
                  <span className="text-center w-1/5 font-semibold text-sm">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default OrderCart;
