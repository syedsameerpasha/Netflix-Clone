import React, { useEffect, useState } from 'react'
import './css/Row.css'
import axios from './Axios';

const Row = ({title,isLargeRow,fetchURL}) => {
    const [movies,setMovie]=useState([])
    const base_url="https://image.tmdb.org/t/p/original/";
    useEffect(()=>{
        async function fetchData(){
            const request=await axios.get(fetchURL);
            setMovie(request.data.results);
            return request
        }
        fetchData()

    },[fetchURL])   //whenever url changes my request changes
  return (
    <div className='row'>
        <h2>{title}</h2>

        <div className='row_poster'>
            {
                movies.map(movie=>{
                    return  <img className={`rowposter ${isLargeRow && "largeImage"}`} src={`${base_url}${isLargeRow ? movie.poster_path:movie.backdrop_path}`} key={movie.id}/>
            
                })
            }
           
        </div>
    </div>
  )
}

export default Row