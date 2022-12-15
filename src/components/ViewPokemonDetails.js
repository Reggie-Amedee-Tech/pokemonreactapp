import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import classes from '../cssModules/PokemonCard.module.css';

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
        <div className={classes.TableContainer}>
            {pokemon.length < 1 ? <div className={classes.Container}>
                <table className={classes.Table}>
                    <tbody>
                        <tr ><h1 className={classes.TableRowTop}>No Pokemon saved in this list!</h1></tr>
                    </tbody>
                </table>
                <button className={classes.Button} onClick={() => {
                    navigate("search")
                }} style={{margin: "0 auto", marginBottom: "5px"}}>Search</button>
            </div> : <div className={classes.Container}>
                <table className={classes.Table}>
                    <tbody>
                        <tr><h1 className={classes.TableRowTop}>All Lists</h1></tr>
                        {pokemon.map((poke, i) => {
                            return <div key={i} className={classes.LinkDiv}>
                                <td><Link to={`${poke.pokemonName}`} className={classes.Link}><h2 className={classes.TableRowData}>{poke.pokemonName}</h2></Link></td>
                            </div>
                        })}
                    </tbody>
                </table>
            </div>}
            <button className={classes.Button} onClick={() => navigate(-1)} style={{margin: "0 auto", marginTop: "5px"}}>Go Back</button>
        </div>
    )
}

// {pokemon.length < 1 ? <h1>No Pokemon Saved</h1> : pokemon.map(poke => {
//     return <div>
//         <h1 onClick={() => {
//             navigate("" + poke.pokemonName)
//         }}>{poke.pokemonName}</h1>
//     </div>
// })}

export default ViewPokemonDetails