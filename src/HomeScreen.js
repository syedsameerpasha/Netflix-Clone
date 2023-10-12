import React from 'react'
import './css/Homescreen.css'
import Nav from './Nav'
import Banner from './Banner'
import Row from './Row'
import userrequests from './Request'


const HomeScreen = () => {
  return (
    <div className='homescreen'>
      <Nav/>
      <Banner/>
      <Row title="Netflix Originals" isLargeRow fetchURL={userrequests.fetchTNetflixOriginals}/> {/*because first row image are big so*/}
      <Row title="Trending Now" fetchURL={userrequests.fetchTrending}/>
      <Row title="Top Rated" fetchURL={userrequests.fetchTopRated}/>
      <Row title="Action Movies" fetchURL={userrequests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchURL={userrequests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchURL={userrequests.fetchHorrorMovies}/>
      <Row title="Romantic Movies" fetchURL={userrequests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchURL={userrequests.fetchDocumentaries}/>
      </div>
  )
}

export default HomeScreen