import React from "react";
import styled from "styled-components";
import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";

const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3em;

  .prev,
  .next {
    background-color: #ffff;
    color: rgb(28, 88, 212);
    font-size: large;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 40px;
    border: 1px solid rgb(28, 88, 212);
    transition: transform ease-in-out 0.3s;
  }

  .prev:hover {
    cursor: pointer;
    transform: translate(-5px, 0px);
  }
  .next:hover {
    cursor: pointer;
    transform: translate(5px, 0px);
  }

  .prev:disabled,
  .next:disabled {
    cursor: not-allowed;
    opacity: 0.4;
    transform: none;
  }
  .page-num {
    margin: 0em 2em;
    font-size: 1.3rem;
    color: #000;
  }
  span {
    font-weight: 700;
  }
  .page-num-mobile {
    display: none;
  }
  @media only screen and (max-width: 600px) {
    .page-num-mobile {
      display: block;
      margin: 0em 1em;
      font-size: 1.3rem;
    }
    .page-num {
      display: none;
    }
  }
`;
function Footer({ currentPage, totalPages, onPrev, onNext }) {
  return (
    <FooterWrapper>
      <button className="prev" onClick={onPrev} disabled={currentPage === 1}>
        <FcPrevious />
        Prev
      </button>
      <p className="page-num">
        page <span>{currentPage}</span> of <span>{totalPages}</span> pages
      </p>
      <p className="page-num-mobile">
        <span>{currentPage}</span> of <span>{totalPages}</span>
      </p>
      <button
        className="next"
        onClick={onNext}
        disabled={currentPage === totalPages}
      >
        Next
        <FcNext />
      </button>
    </FooterWrapper>
  );
}

export default Footer;
