import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Details from "../components/CarDetails"

export default function CarSingle(){
    const {id} = useParams()
    const [CarDetails, setCarDetails] = useState({})
    const [status, setStatus] = useState({})
    useEffect(() => {
    async function getDetails(){
            const response = await fetch(`https://my-json-server.typicode.com/Llang8/cars-api/cars/${id}`)
            setStatus(response.status)
            console.log("status: " + status)
            const data = await response.json()
            setCarDetails(data)        
        }
        getDetails()
    }, [status])

    return (
        <div>
            {
                (status == 200) ?
                <div>
                <h1>Car #{id}</h1>
                <Details car={CarDetails} hideLink={true}/>
                </div>
                : (typeof status == 'number') ?
                <div>
                    <h1>Error Status: {status}</h1>
                </div>
                :
                <></>
            }
        </div>
    )
}