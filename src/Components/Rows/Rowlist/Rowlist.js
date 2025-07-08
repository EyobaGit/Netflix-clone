import React from 'react'
import Row from '../Row/Row'
import requests from "../../../utils/requests";
const Rowlist = () => {
  return (
   <>
   <Row
    title="NETFLIX ORIGINALS"
                fetchUrl={requests.fetchNetFlixOriginals} 
                isLargeRow={true}
                />
   <Row
   title="TRENDING NOW"
                fetchUrl={requests.fetchTrending} 
                />
  <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
            <Row title="TV Shows" fetchUrl={requests.fetchTvShow} />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
   </>
  )
}

export default Rowlist
