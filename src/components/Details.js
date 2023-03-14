import CarImage from "./CarImage"
import Counter from "./Counter"

export default function Details(props){

    return (
        <div>
            <CarImage image={props.image}/>
            <ul>
                <li>Make: {props.make}</li>
                <li>Model: {props.model}</li>
                <li>Year: {props.year}</li>
            </ul>
            <Counter />
        </div>
    ) 
}