import { useState } from "react";
import Details from "../components/Details";
import img1 from "../img/car1.jpg"
import img2 from "../img/car2.jpg"

export default function Home(){
    const [car, setCar] = useState([
        {
          make: 'BMW',
          model: 'M8',
          year: "2022",
          image: img1
        },
        {
            make: 'Porsche',
            model: 'Macan',
            year: "2022",
            image: img2
        }
      ])

    return (
        <div>
        {
            car.map((cars) => <Details make={cars.make} model={cars.model} year={cars.year} image={cars.image}/>)
        }
        </div>
    )
}