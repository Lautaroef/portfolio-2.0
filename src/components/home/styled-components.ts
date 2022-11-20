import styled from "styled-components";

export const StyledPresentation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 595px;
  margin: auto;
  max-width: 1075px;

  .lottie-player {
    margin-top: 15rem;
  }

  @media screen and (max-width: 780px) {
    flex-direction: column;
  }
`;

export const TypedContainer = styled.div`
  width: 100%;
  margin-left: 2.25rem;

  .currently-dev {
    font-size: 1.5rem;
    letter-spacing: 0.2px;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 2rem;
  }

  h3 {
  }

  .my-buttons {
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
    margin-top: 2rem;

    a {
      font-size: 0.95rem;
      padding: 0.525rem 2.15rem;
    }
  }

  > div {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    min-height: 80px;
    margin-bottom: 1rem;

    span {
      margin-right: 0.8rem;
      font-size: 1.2rem;
      font-weight: 500;
      letter-spacing: 0.1px;
    }

    .typed-element {
      display: inline-block;
      font-size: 1.1rem;
      font-weight: 600;
      letter-spacing: 0.3px;
      margin-bottom: 0.15rem;
    }
  }
`;
