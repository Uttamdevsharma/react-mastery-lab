import { useState } from "react";

export default function Counter(){

    const[count,setCount] = useState(0);

    function increment(){
        setCount(count + 1);
    }



    return (

        <div>
            <h1>Count : {count} </h1>

            <div>
                <button onClick={increment}>Increment</button>
            </div>
        </div>


    );
}