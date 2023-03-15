import { useState, useEffect } from "react";
import Details from "../components/CarDetails";


export default function Home(){
    const [carDetails, setCarDetails] = useState([])
    const [status, setStatus] = useState({})
    useEffect(() => {
    async function getDetails(){
            const response = await fetch(`https://my-json-server.typicode.com/Llang8/cars-api/cars`)
            setStatus(response.status)
            console.log("status: " + status)
            const data = await response.json()
            setCarDetails(data)        
        }
        getDetails()
    }, [status])

    return (
        <div>
            <h1>Home</h1>
            {carDetails.map((car) => <Details car={car} key={car.id}/>)}
        </div>
    )
}