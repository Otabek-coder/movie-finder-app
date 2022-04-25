import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FilterModal from "./FilterModal";
import { useDisableScroll } from "../../hooks";

const FormWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3em auto;
  .movie-title {
    font-size: 3rem;
    margin-bottom: 0.5em;
    text-transform: uppercase;
    background: linear-gradient(to right, #30cfd0 0%, #330867 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font: {
      size: 20vw;
    }
  }
  &:after {
    display: ${({ open }) => (open ? "block" : "none")};
    /* display: none; */
    position: fixed;
    content: "";
    height: 100%;
    width: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: 1;
    transition: opacity 0.5s ease;
    & {
      opacity: ${({ open }) => (open ? 1 : 0)};
    }
  }
`;
const InputContainer = styled.div`
  position: relative;
  input {
    padding-left: 2em;
    width: 350px;
    height: 51px;
    border-radius: 25px;
    border: 0.9px solid hsl(0, 36%, 70%);
    outline: none;
  }
  input,
  select,
  textarea {
    color: #30cfd0;
    font-size: 1.2rem;
  }
  input::placeholder {
    color: hsl(0, 80%, 86%);
    font-size: 1rem;
    font-family: "Josefin Sans", sans-serif;
    font-weight: 400;
  }
  .filter-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.8em 2em;
    color: #fff;
    border-radius: 25px;
    font-size: large;
    border: 0;
    background-color: hsl(0, 74%, 74%);
    transition: all 0.2s ease-in;
  }
  button:hover {
    cursor: pointer;
    transform: scale(1.1);
    box-shadow: hsl(0, 80%, 80%) 0px 20px 30px -10px;
    background-color: hsl(0, 80%, 80%);
  }
`;
export default function FilterForm({ itemsPerPage, onSelect, onFilterChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const [releasedYear, setReleasedYear] = useState(0);
  const [search, setSearch] = useState("");
  const [language, setLanguage] = useState("");
  const [mediaType, setMediaType] = useState("");

  useDisableScroll(isOpen);

  useEffect(() => {
    // console.log({
    //   search,
    //   releasedYear,
    //   language,
    //   mediaType,
    // });
    onFilterChange({ search, releasedYear, language, mediaType });
  }, [search, releasedYear, language, mediaType]);

  const toggleModal = () => setIsOpen((prev) => !prev);

  function handleChange(event) {
    setSearch(event.target.value);
  }

  return (
    <FormWrapper open={isOpen}>
      <h1 className="movie-title">Movie Finder</h1>
      <InputContainer>
        <input
          type="text"
          placeholder="Search a movie "
          onChange={handleChange}
          value={search}
          className="movie=input"
        />

        <button onClick={toggleModal} className="filter-btn">
          Filter
        </button>
      </InputContainer>
      <FilterModal
        isOpen={isOpen}
        toggleModal={toggleModal}
        itemsPerPage={itemsPerPage}
        onSelect={onSelect}
        releasedYear={releasedYear}
        setReleasedYear={setReleasedYear}
        language={language}
        setLanguage={setLanguage}
        mediaType={mediaType}
        setMediaType={setMediaType}
      />
    </FormWrapper>
  );
}
