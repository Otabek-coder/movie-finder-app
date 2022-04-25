import React from "react";
import styled from "styled-components";
import Card from "./Card";

const CardListWrapper = styled.div`
  position: relative;
  max-width: 1220px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1rem;
  min-height: 840px;
  margin: 0px auto;

  @media only screen and (max-width: 1100px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media only screen and (max-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 500px) {
    grid-template-columns: 1fr;
    .img-container {
      margin-left: auto;
    }
  }
`;

function CardList({ movies }) {
  const moviesList = movies.map((movie) => {
    return <Card movie={movie} key={movie.id} />;
  });
  return <CardListWrapper>{moviesList}</CardListWrapper>;
}

export default CardList;
