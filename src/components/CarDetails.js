import CarImage from "./CarImage"
import Counter from "./Counter"
import { Link } from "react-router-dom"

export default function Details(props){

    return (
        <div>
            <h3>{props.car.name}</h3>
            <ul>
                <li>Owner: {props.car.owner}</li>
                <li>Year: {props.car.year}</li>
                <li>Price: ${props.car.sellingPrice}</li>
            </ul>
            {
                (!props.hideLink) ?
                <Link to={`/car/${props.car.id}`}>Read More</Link>
                :
                <></>
            }
            <Counter />
        </div>
    ) 
}