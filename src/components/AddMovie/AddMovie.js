  import React, { useState } from 'react';
  import styled from 'styled-components';
  import Button from '../ui/Button';

  const AddMovie = ({ movies, setMovies }) => {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [link, setLink] = useState("");
    const [genre, setGenre] = useState("");

    const handleTitle = (e) => { setTitle(e.target.value) }
    const handleLink = (e) => { setLink(e.target.value) }
    const handleDate = (e) => { setDate(e.target.value) }
    const handleGenre = (e) => { setGenre(e.target.value) };

    const handleSubmit = (e) => {
      e.preventDefault()

      if (title === "" || link === "" || date === "" || genre === "") {
        alert("Title, Link, Date, and Genre cannot be empty");
      } else {
        const movie = {
          id: movies.length + 1,
          title: title,
          date: date,
          image: link,
          genre: genre
        }
        setMovies([...movies, movie]);
        alert("Successfully added a new movie");
      }
    }

    const genreOptions = ["Action", "Director", "Drama", "Kartun"];

    return (
      <AddMovieStyle>
      <div className='container'>
        <form className="addmovie" onSubmit={handleSubmit}>
          <input placeholder='Masukkan Title' className='addmovie__input' type='text' value={title} onChange={handleTitle} />
          <input placeholder='Masukkan Link' className='addmovie__input' type='text' value={link} onChange={handleLink} />
          <input placeholder='Pilih Date' className='addmovie__input' type='date' value={date} onChange={handleDate} />
          <select className='addmovie__input' value={genre} onChange={handleGenre}>
            <option value="" disabled>Pilih genre</option>
            {genreOptions.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
          <Button variant="primary">Gasss</Button>
        </form>
      </div>
      </AddMovieStyle>
    );
  }

  const AddMovieStyle = styled.div`
      .container {
          margin: 1rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
      }

      .addmovie {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 1rem;
          background: lightslategray;
          border-radius: 15px;
      }

      .addmovie__title {
          margin-top: 1rem;
          text-align: center;
          font-size: 1.6rem;
          color: white;
      }

      .addmovie__input {
          display: inline-block;
          box-sizing: border-box;
          border-radius: 10px;
          border-style: none;
          padding: 10px;
          margin: 1rem;
          width: 250px;
          height: 40px;
      }

      @media (min-width: 768px) {
          .addmovie {
              margin: 8px;
              max-width: 330px;
              height: auto;
          }
          .addmovie__input {
              width: 260px;
          }
      }
  `

  export default AddMovie;
