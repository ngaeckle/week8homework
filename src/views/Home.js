import { useState, useEffect, useContext } from "react";
import Details from "../components/CarDetails";
import { DataContext } from "../contexts/DataProvider";
import { AuthContext } from "../contexts/AuthProvider";


export default function Home(){
   const {cars} = useContext(DataContext)
   const {user} = useContext(AuthContext)

    return (
        <div>
            <h1>Home</h1>
            {cars.map((car) => <Details car={car} key={car.id}/>)}
        </div>
    )
}