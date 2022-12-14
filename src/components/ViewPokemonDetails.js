import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const ViewPokemonDetails = () => {
    const [pokemon, setPokemon] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const location = useLocation()

    const listPathName = location.pathname.slice(10)

    console.log(listPathName)

    const navigate = useNavigate();

    console.log(pokemon)

    useEffect(() => {
        axios.get("http://localhost:4000/api/pokemon/allPokemonList/" + listPathName)
            .then(res => {
                setPokemon(res.data.pokemonList)
                setLoaded(true)
            })
            .catch(err => console.log(err.message))
    }, [])

    


    return (
        <div>
            {loaded === true ? 
                <div>
                    <div>
                    {pokemon.length < 1 ? <h1>No Pokemon Saved</h1> : pokemon.map(poke => {
                        return <div>
                            <h1>{poke.pokemonName}</h1>
                        </div>
                    })}
                    </div>
                    <button onClick={() => {
                        navigate("search")
                    }}>Search Pokemon</button>
                </div> : <h1>Loading...</h1>}
        </div>
    )
}

export default ViewPokemonDetails