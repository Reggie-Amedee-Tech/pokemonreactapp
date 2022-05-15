import React from "react";
import classes from './Header.module.css'
import PokemonLogo from './images/pokemon.png'

const Header = () => {


    return <>
    <div className={classes.Topshell}>
    <img src={PokemonLogo} className={classes.Img}></img>
    <h1 className={classes.H1}>: Codex</h1>
    </div>
    </>
}

export default Header;