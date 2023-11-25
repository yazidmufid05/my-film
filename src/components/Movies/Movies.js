import React from 'react';
import styled from 'styled-components';
import Movie from '../Movie/Movie';

  const Movies = (props) => {
      const { item, title } = props;
    
      return (
        <MoviesStyle>
        <div className='container'>
          <section className='movies'>
            <h2 className='movies__title'>{title}</h2>
            <div className='movie__container'>
              {
                item.map((data) => <Movie key={data.id} item={data} />)
              }
            </div>
          </section>
        </div>
        </MoviesStyle>
      );
    };

    const MoviesStyle = styled.div`
    .container {
      margin: 1rem;
    }
    
    .movies {
      margin: 5rem 0;
      text-align: center;
    }
    
    .movies__title {
      margin-bottom: 1rem;
      font-size: 2.44rem;
      color: #4361ee;
    }
    
    .movie__container {
      display: flex;
      flex-wrap: wrap;  /* Tambahkan wrap untuk memastikan elemen-elemen berjajar pada layar kecil */
      justify-content: center;
      align-items: center;
    }
    
    .movie {
      flex-basis: 100%;  /* Setiap film mengambil lebar penuh pada layar kecil */
      margin-bottom: 1rem;
    }
    
    .movie__image {
      border-radius: 25px;
      max-width: 100%;
      height: auto;
      margin-bottom: 1rem;
    }
    
    .movie__title {
      color: #4361ee;
      font-size: 1.95rem;
      margin-bottom: 0.5rem;
    }
    
    .movie__date {
      color: #64748b;
    }
    
    .movie__button {
      display: inline-block;
      padding: 10px 20px;
      font-size: 16px;
      text-align: center;
      text-decoration: none;
      cursor: pointer;
      border: 2px solid #4361ee;
      color: #4361ee;
      background-color: #fff;
      border-radius: 5px;
      transition: background-color 0.3s, color 0.3s;
    }
    
    @media (min-width: 768px) {
      .movie {
        flex-basis: 48%;  /* Setiap film mengambil sebagian dari lebar pada layar sedang */
      }
    }
    
    @media (min-width: 992px) {
      .container {
        max-width: 1200px;
        margin: 3rem auto;
      }
    
      .movie {
        flex-basis: 24%;  /* Setiap film mengambil sebagian yang lebih kecil pada layar besar */
        padding: 1rem;
      }
    }
    `

  export default Movies;
