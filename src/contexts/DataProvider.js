import { useState, useEffect, createContext, useContext } from "react";
import {getFirestore, getDocs, collection, doc, getDoc} from '@firebase/firestore'

export const DataContext = createContext()

export const DataProvider = function(props) {
    const [cars, setCars] = useState([])
    const db = getFirestore()
    
    useEffect(() => {
        async function getCars(){

            const querySnapshot = await getDocs(collection(db, 'cars'))
            console.log(querySnapshot)
            const loadedCars=[]
            querySnapshot.forEach((doc) => {
                loadedCars.push({
                    id: doc.id,
                    ...doc.data()
                })
                setCars(loadedCars)
            })
        }   
        getCars()
    }, [])

    async function getCar(id){
        const docRef = doc(db, "cars", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            return docSnap.data()
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
            throw new Error
          }
    }

    async function getPokemonData(id){
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await response.json()
        return data
    }

    const value ={
        cars,
        getCar,
        getPokemonData
    }

    return (
        <DataContext.Provider value={value}>
            {props.children}    
        </DataContext.Provider>
    )
}