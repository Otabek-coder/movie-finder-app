import React, { useEffect, useState } from "react";
import CardList from "./components/CardList";
import styled from "styled-components";
import Filter from "./components/filter/Filter";
import Footer from "./components/Footer";

import data1 from "./data/data1.json";
import data2 from "./data/data2.json";
import data3 from "./data/data3.json";
import data4 from "./data/data4.json";
import data5 from "./data/data5.json";

const allMovies = [
  ...data1.results,
  ...data2.results,
  ...data3.results,
  ...data4.results,
  ...data5.results,
];

const Wrapper = styled.div`
  margin: 0em 2em;
  position: relative;
`;


export const ITEMS_PERPAGE_DEFAULT = 10;
export const paginationOptions = [5, ITEMS_PERPAGE_DEFAULT, 15, 20];

function App() {
  const [filteredMovies, setFilteredMovies] = useState(allMovies);
  const [currentPageMovies, setCurrentPageMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(ITEMS_PERPAGE_DEFAULT);

  const moviesLength = filteredMovies.length;
  const totalPages = Math.ceil(moviesLength / itemsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [itemsPerPage]);

  useEffect(() => {
    const trimStart = (currentPage - 1) * itemsPerPage;
    const trimEnd = trimStart + itemsPerPage;

    const pageMovies = filteredMovies.slice(trimStart, trimEnd);
    setCurrentPageMovies(pageMovies);
  }, [currentPage, itemsPerPage, filteredMovies]);

  const onPrev = () => setCurrentPage((prev) => prev - 1);

  const onNext = () => setCurrentPage((prev) => prev + 1);

  const onSelect = (itemsPerPageNew) => {
    setItemsPerPage(itemsPerPageNew);
  };

  const onFilterChange = ({ search, releasedYear, language, mediaType }) => {
    let movies = [...allMovies];
    if (search) {
      movies = movies.filter((movie) =>
        String(movie.title)
          .toLowerCase()
          .includes(search.toLowerCase())
      );
    }
    if (language) {
      movies = movies.filter((movie) => movie.original_language === language);
    }
    if (releasedYear) {
      movies = movies.filter((movie) => {
        const year = movie.released_date.split("-")[0];
        return year <= releasedYear;
      });
    }
    if (mediaType) {
      movies = movies.filter((movie) => movie.media_type === mediaType);
    }
    setFilteredMovies(movies);
  };
  return (
   
    <Wrapper>
      <Filter
        itemsPerPage={itemsPerPage}
        onSelect={onSelect}
        onFilterChange={onFilterChange}
      />
      <CardList movies={currentPageMovies} />
      <Footer
        onPrev={onPrev}
        onNext={onNext}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </Wrapper>
 
  );
}

export default App;
