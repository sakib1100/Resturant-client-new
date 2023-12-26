import { useEffect, useState } from "react";

const Dinner = () => {
    const [dinner,setDinner] = useState([]);
    useEffect(() => {
        fetch('dinner.json')
        .then(res => res.json())
        .then(data => setDinner(data))
    })
    return (
        <div className="mx-20">
            <h1>Dinner for you</h1>
      
       {
        dinner.map(dataDinner => <h1 key={dataDinner.id}></h1>)
       }

        </div>
    );
};

export default Dinner;