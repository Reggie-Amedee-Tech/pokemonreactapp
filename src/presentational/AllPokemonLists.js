import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AllPokemonLists = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:4000/api/pokemon/allPokemonList")
        .then(res => {
            setPokemonList(res.data)
            setLoaded(true)
            console.log(res)})
        .catch(err => console.log(err.message))

    }, [loaded])


  return (
    <div>
        <h1>All Lists</h1>
        {loaded === true ? pokemonList.map(list => {
            return <ol>
                <li onClick={() => {
                    navigate(list._id)
                }} style={{fontStyle: "underline"}}>{list.pokemonListName}</li>
            </ol>
        }) : <h2>Loading...</h2> }
    </div>
  )
}

export default AllPokemonLists