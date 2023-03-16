import { useState, useEffect, useContext } from "react"
import { useParams } from "react-router-dom"
import Details from "../components/CarDetails"
import { DataContext } from "../contexts/DataProvider"

export default function CarSingle(){
    const {id} = useParams()
    const [CarDetails, setCarDetails] = useState({})
    const [Error, setError] = useState(false)
    const {getCar} = useContext(DataContext)
    useEffect(() => {
        async function handleLoad(){
            try {
                const data = await getCar(id)
                setCarDetails(data)
            } catch(err){
                setError(true)
            }
        }
        handleLoad()
    }, [])

    return (
        <div>
            {
                (!Error) ?
                <div>
                <h1>Car #{id}</h1>
                <Details car={CarDetails} hideLink={true}/>
                </div>
                :
                <div>
                    <h1>Error</h1>
                </div>
            }
        </div>
    )
}