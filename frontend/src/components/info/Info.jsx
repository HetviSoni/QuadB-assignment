import './info.css';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
const ShowSummary = ({ summary }) => {
    return (
        <div dangerouslySetInnerHTML={{ __html: summary }} ></div>
    );
}

const Info = () => {
    const location = useLocation();
    const {name, summary, image, premiered, language, genres } = location.state;
    const [isOpen, setIsOpen] = useState(false);

    const openPopup = () => setIsOpen(true);
    const closePopup = () => setIsOpen(false);

    const handleSubmit = (event) => {
        event.preventDefault();
    }
    return (
        <div className="info">
            <div className="info-left">
                <img src={image} alt='movie'></img>
            </div>
            <div className="info-right">
                <h2>{name}</h2>
                <ShowSummary summary={summary} />
                <b>Language:</b> {language}<br></br>
                <b>Premiered:</b> {premiered}
                <div className="genre-buttons">
                    {genres.map(genre => (
                        <button key={genre}>{genre}</button>
                    ))}
                </div>
                {isOpen && (<div className="popup-container">
                        <div className="popup-content">
                            <span className="close" onClick={closePopup}>&times;</span>
                            <form className="request-form" onSubmit={handleSubmit}>
                                <label htmlFor="date">Date:</label><br></br>
                                <input type="date" id="date" name="date" required /><br></br>

                                <label htmlFor="time">Time:</label><br></br>
                                <input type="time" id="time" name="time" required /><br></br>

                                <label htmlFor="description">Description:</label><br></br>
                                <textarea id="description" name="description" required /><br></br>

                                <input className="submit" type="submit" value="Book" onClick={closePopup}/>
                            </form>
                        </div>
                    </div>
                    )}
                <button className='book' onClick={openPopup} id="open-form">Book a ticket</button>
            </div>

        </div>
    )
}
export default Info;