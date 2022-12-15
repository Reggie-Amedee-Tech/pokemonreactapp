import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const ViewPokemonDetails = () => {
    const [pokemon, setPokemon] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const location = useLocation()

    const listId = location.pathname.slice(10)

    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:4000/api/pokemon/allPokemonList/" + listId)
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
                            <h1 onClick={() => {
                                navigate("" + poke.pokemonName)
                            }}>{poke.pokemonName}</h1>
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