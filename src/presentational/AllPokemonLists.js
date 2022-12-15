import axios from 'axios';
import React, { useEffect, useState } from 'react';
import classes from '../cssModules/PokemonCard.module.css';
import { Link } from 'react-router-dom';

const AllPokemonLists = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:4000/api/pokemon/allPokemonList")
            .then(res => {
                setPokemonList(res.data)
                setLoaded(true)
                console.log(res)
            })
            .catch(err => console.log(err.message))

    }, [loaded])

    return (
        <div className={classes.TableContainer}>
            {loaded === true ? <div className={classes.Container}>
                        <table className={classes.Table}>
                            <tbody>
                                <tr ><h1 className={classes.TableRowTop}>All Lists</h1></tr>
                                {pokemonList.map((poke, i) => {
                                    return <div key={i} className={classes.LinkDiv}>
                                        <td><Link to={`${poke._id}`} className={classes.Link}><h2 className={classes.TableRowData}>{poke.pokemonListName}</h2></Link></td>
                                    </div>
                                })}
                            </tbody>
                        </table>
                    </div> : <h1>Loading...</h1>}
                    
                </div>
    )
}

export default AllPokemonLists