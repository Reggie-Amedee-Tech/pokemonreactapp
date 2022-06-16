import React from 'react';
import { Link } from 'react-router-dom';
import classes from '../cssModules/HomePage.module.css'

const HomePage = () => {
    return (
        <div className={classes.HomeDiv}>
            <div className={classes.Container}>

            
            <div className={classes.DivRight}>

                
                

            </div>

            <div className={classes.DivLeft}>
                <div className={classes.DivLeftButtons}>
                    <Link to="/search" className={classes.Link}>Search</Link>
                    <Link to="/pokemonList" className={classes.Link}>Browse</Link>
                </div>

            </div>
            </div>
            <footer>
          Page Created By Reginald Jean Amedee
        </footer>
            
        </div>
    );
};

export default HomePage;