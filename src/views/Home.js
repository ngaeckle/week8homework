import { useState, useEffect, useContext } from "react";
import Details from "../components/CarDetails";
import { DataContext } from "../contexts/DataProvider";


export default function Home(){
   const {cars} = useContext(DataContext)

    return (
        <div>
            <h1>Home</h1>
            {cars.map((car) => <Details car={car} key={car.id}/>)}
        </div>
    )
}