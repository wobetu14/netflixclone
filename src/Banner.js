import axios from './axios';
import React, { useState, useEffect } from 'react';
import requests from './requests';
import './Banner.css'

function Banner() {
    const [movie, setMovie]=useState([]);

    useEffect(() => {
        async function fetchData(){
            const popularMovies=await axios.get(requests.fetchPopular);
            setMovie(popularMovies.data.results
                [
                    Math.floor(Math.random()*popularMovies.data.results.length)
                ]
                );
            return()=>[];
        }
        fetchData();
    }, []);

    function truncate(str, n){
        return str?.length>n ? str.substr(0, n-1)+"... ":str;
    }

    return (
        <header 
        className='banner'
        style={{
            backgroundSize:"cover",
            backgroundImage:`url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
            backgroundPosition:"center center",
        }}
         > 
            <div className='banner_contents'>   
              <h1 className='banner_title'>{movie.title }</h1>
                <div className='banner_buttons'>
                    <button className='banner_button'>Play</button>
                    <button className='banner_button'>My List</button>
                </div>

                <h1 className='banner_description'>
                    {truncate(movie?.overview, 150)}
                    </h1>
            </div>

            <div className='banner_fadeBottom'>
                
            </div>
        </header>
    )
}

export default Banner
