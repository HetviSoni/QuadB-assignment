import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';
const ShowSummary = ({ summary }) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: summary }} ></div>
  );
}

const myStyle = {
  color: '#6e68e3',
};

const Home = () => {
  const [shows, setShows] = useState([]);
  const navigate = useNavigate();

  function handleClick(show) {
    const { id, name, summary, image, premiered, language, genres } = show.show;
    navigate('/info', {
      state: { 
        id,
        name,
        summary,
        image: image?.medium,
        premiered,
        language,
        genres
      }
    });
  }
  
  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(response => response.json())
      .then(data => {
        setShows(data);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="show-list">
      {shows.map((show) => (
        <div className="card-container" key={show.show.id}>
          <div className="card">
            <div className="card-front">
              <img src={show.show.image ? show.show.image.medium : ''} alt={show.show.name} />
            </div>
            <div className="card-back">
              <h2>{show.show.name}</h2>
              {/* {show.show.summary.substr(0, 300)}... */}
              {/* <div dangerouslySetInnerHTML={{ __html: show.show.summary.summaryHTML }}></div> */}
              <ShowSummary summary={show.show.summary.substr(0, 300)} />... <br></br>
              <h4>Language: </h4>{show.show.language}<br></br>

              <div className='card-bottom'>
                <span><h4>Rating: </h4> {show.show.rating.average} <i className="fa-solid fa-star fa-beat" style={{"color": "#e7f61e"}}></i></span>
                <span className='details' onClick={()=>handleClick(show)}><h6>View Details </h6><i className="fa-solid fa-arrow-right fa-beat" style={myStyle}></i> </span></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
