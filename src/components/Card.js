import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  max-height: 415px;
  @media only screen and (max-width: 600px) {
    max-height: 100%;
  }
`;

const MovieImgContainer = styled.div`
  overflow: hidden;
  max-width: 300px;
  .movie-img {
    width: 100%;
    height: 100%;
    object-fit: cover;  
    margin-bottom: auto;
    transition: 0.3s ease;
    &:hover {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
  }
  @media only screen and (max-width: 600px) {
    max-width: 100%;
  }
`;

const MovieDetailsContainer = styled.div`
  text-align: center;

  .title {
    font-size: 1.3rem;
    overflow: hidden;
    text-overflow: ellipsis ellipsis;
    white-space: nowrap;
    display: block;
    width: 230px;
  }
  .card-footer {
    display: flex;
    justify-content: space-around;
  }
`;

function Card({ movie }) {
  const {
    title,
    released_date,
    vote_average,
    media_type,
    original_language,
    poster_path,
  } = movie;

  return (
    <CardWrapper>
      <MovieImgContainer>
        <img
          src={"https://image.tmdb.org/t/p/w500" + poster_path}
          alt=""
          className="movie-img"
        />
      </MovieImgContainer>
      <MovieDetailsContainer>
        <h1 className="title">{title}</h1>
        <div className="card-footer">
          <p className="released-date">{String(released_date).split("", 4)}</p>
          <p className="vote">
            {Number.isInteger(vote_average)
              ? vote_average + ".0"
              : vote_average}
          </p>
          <p className="media-type">{media_type.toUpperCase()}</p>
          <div className="lang">{original_language.toUpperCase()}</div>
        </div>
      </MovieDetailsContainer>
    </CardWrapper>
  );
}

export default Card;
