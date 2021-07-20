import React from 'react';
import {useFetch} from "../hooks/useFetch";

export default function HooksPersonalizados(){
    //console.log(1,useFetch())
    let url = "https://pokeapi.co/api/v2/pokemons/"
    url = "https://jsonplaceholder.typicode.com/users"
    let {data, isPending, error} = useFetch(url)
    //console.log(2,useFetch())
    console.log("data:",data)
    return(
        <>
            <h2>Hooks personalizados</h2>
            <h3>{JSON.stringify(isPending)}</h3>
            <h3>
                <mark>{JSON.stringify(error)}</mark>
            </h3>
            <h5>
                <pre style={{whiteSpace:"pre-wrap"}}>
                    <code>{JSON.stringify(data)}</code>
                </pre>
            </h5>
        </>
    )
}