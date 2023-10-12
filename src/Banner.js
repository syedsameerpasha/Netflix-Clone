import React, { useEffect } from 'react'
import './css/Banner.css'
import { useState } from 'react'
import axios from "./Axios"     //why because i have base url in my local axios so
import userrequests from './Request'

const Banner = () => {
    const [movie,setMovie]=useState([])

    useEffect(()=>{
        async function fetchData(){
            try{
            const request=await axios.get(userrequests.fetchTNetflixOriginals);
            //console.log(request.data.results) 
            //console.log(Math.floor(Math.random()*request.data.results.length-1))  //will get movies here
                setMovie(request.data.results[Math.floor(Math.random()*request.data.results.length-1)])
            } catch(error){
                console.log(error)
            }
                
        }

        fetchData();
    },[])

  return (
    <div className='banner' style={{backgroundImage:`url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,backgroundPosition:`center`,backgroundSize:`cover`}}>
        <div className='banner_content'>
            <h1 className='banner_title'>{movie?.title||movie?.original_name||movie?.name}</h1>
            <div className='banner_buttons'>
                <button>Play</button>
                <button>My List</button>

            </div>
            <div className='banner_description'>
                <p>{movie?.overview}</p>

            </div>
        </div>
        <div className='banner_fade'>

        </div>
        </div>
  )
}

export default Banner