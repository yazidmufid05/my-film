import React, { useEffect, useState } from 'react';
import GetDetailMovie from '../../utils/networks/GetDetailMovie';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
  


const Detail = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const [genres, setGenres] = useState([]);

    const url_image = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`;

    const getDetail = async (id) => {
        const data = await GetDetailMovie(id);
        setMovie(data);
        setGenres(data.genres);
    }

    useEffect(() => {
        getDetail(id);
    }, [id]);

    console.log(movie);

    return (
        <DetailStyle className="container">
            <section className="hero">
                <div className="hero__left">
                    <h2 className="hero__title">{movie.original_title}</h2>
                    <h3 className="hero__tagline">{movie.tagline}</h3>
                    <p className="hero__desc">{movie.overview}</p>
                    <div className="hero__genres">
                        {genres.map((item, index) => (
                            <span key={index} className="hero__genre">{item.name}</span>
                        ))}
                    </div>
                    <p className="hero__date">Release Date: {movie.release_date}</p>
                    <Link to="/">
                    <button className="back-button">Back Home</button>
                </Link>
                </div>
                
                <div className="hero__right">
                    <img className="hero__image" src={url_image} alt='' />
                </div>
            </section>
        </DetailStyle>
    );
}

const DetailStyle = styled.div`
.container {
    margin: 1rem auto;
    text-align: center;
}

.hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.hero__left {
    margin-bottom: 2rem;
}

.hero__title {
    color: #800000;
    margin-bottom: 1rem;
    font-size: 2.8rem;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.hero__tagline {
    color: #800000;
    margin-bottom: 2rem;
    font-size: 1.8rem;
}

.hero__genres {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;
    justify-content: center;
    flex-wrap: wrap;
}

.hero__genre {
    color: #fff;
    font-size: 1rem;
    font-weight: bold;
    background-color: #800000;
    padding: 0.3rem 0.7rem;
    border-radius: 5px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: inline-block;
}

.hero__desc {
    color: #008080;
    margin-bottom: 2rem;
    font-size: 1.2rem;
    line-height: 1.6;
}

.hero__date {
    color: #008080;
    margin-bottom: 1rem;
    font-size: 1rem;
}

.back-button {
    background-color: #3a4fc1;
    color: #fff;
    padding: 1rem 2rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease; 
}

.back-button:hover {
    background-color: #4361ee;
    transform: scale(1.1);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.hero__image {
    max-width: 100%;
    height: auto;
    margin-top: 2rem;
    border-radius: 15px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

@media (min-width: 768px) {
    .container {
        max-width: 768px;
    }
}

@media (min-width: 992px) {
    .container {
        max-width: 992px;
    }
    .hero {
        margin: 2rem auto;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
        text-align: left;
    }
    .hero__left {
        max-width: 600px;
        width: 100%;
        margin-right: auto;
        margin-left: 2rem; /* Menggeser elemen kiri ke kanan */
    }
    .hero__right {
        flex-basis: 60%;
        text-align: center;
    }
}


`;

export default Detail;
