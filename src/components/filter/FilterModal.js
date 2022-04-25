import React from "react";
import styled from "styled-components";
import { paginationOptions } from "../../App";

const ModalWrapper = styled.div`
  position: fixed;
  display: ${({ open }) => (open ? "block" : "none")};
  z-index: 99;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  background-color: #fff;
  padding: 1em;
  font-family: Palanquin, sans-serif;
  min-width: 260px;

  .media-type,
  .released-year,
  .language,
  .view-items {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  select {
    width: 80px;
    border: 1px solid #330867;
  }
  label {
    margin-right: 3em;
  }
  option {
    margin-bottom: 5px;
  }
  button {
    padding: 0.8em 3em;
    margin-top: 1em;
    background-color: #330899;
    color: #fff;
    border: none;
    transition: all 0.3s ease-in-out;
  }
  button:hover {
    cursor: pointer;
    background-color: #330867;
  }
  @media only screen and (max-width: 800px) {
    top: 30%;
  }
  @media only screen and (max-width: 600px) {
    top: 45%;
  }

`;

function Modal({
  isOpen,
  toggleModal,
  itemsPerPage,
  onSelect,
  releasedYear,
  setReleasedYear,
  language,
  setLanguage,
  mediaType,
  setMediaType,
}) 

{

  return (
    <ModalWrapper open={isOpen}>
      <div className="modal">
        <>
          <div className="media-type">
            <label htmlFor="media-type-m">Media type:</label>
            <select
              id="media_type"
              name="mediaType"
              value={mediaType}
              onChange={(e) => setMediaType(String(e.target.value))}
            >
              <option value="">None</option>
              <option value="tv">TV</option>
              <option value="movie">Movie</option>
            </select>
          </div>
          <div className="released-year">
            <label htmlFor="released-year-m">Released year:</label>
            <select
              id="released_year"
              name="releasedYear"
              value={releasedYear}
              onChange={(e) => setReleasedYear(Number(e.target.value))}
            >
              <option value={0}>None</option>
              <option value={1970}>1970~</option>
              <option value={1980}>1980~</option>
              <option value={1990}>1990~</option>
              <option value={2000}>2000~</option>
              <option value={2010}>2010~</option>
              <option value={2020}>2020~</option>
            </select>
          </div>
          <div className="language">
            <label htmlFor="language-m">Language:</label>
            <select
              id="lang"
              name="language"
              value={language}
              onChange={(e) => setLanguage(String(e.target.value))}
            >
              <option value="">None</option>
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="ja">日本語</option>
              <option value="fr">français</option>
              <option value="ko">한국어</option>
            </select>
          </div>
          <div className="view-items">
            <label htmlFor="views">View items:</label>
            <select
              id="views"
              defaultValue={itemsPerPage}
              // value={itemsPerPage}
              onChange={(newVal) => onSelect(newVal.target.value)}
              name="View"
            >
              {paginationOptions.map((count) => (
                <option value={count} key={count}>
                  {count}
                </option>
              ))}
            </select>
          </div>
        </>

        <button onClick={toggleModal}>Close</button>
      </div>
    </ModalWrapper>
  );
}

export default Modal;
