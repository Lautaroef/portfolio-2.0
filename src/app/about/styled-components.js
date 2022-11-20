import { styled as styledMUI } from "@mui/material/styles";
import styled from "styled-components";
import Tooltip from "@mui/material/Tooltip";

export const StyledSectionTitle = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 4rem auto 0 auto;

  h1 {
    padding-left: 2rem;
    color: rgb(0, 0, 0, 0.2); //0.2
    font-size: 1.35rem;
  }

  hr {
    width: 88.5%;
    margin: auto;
    border: 1px solid #fff;
    border-top: 1px solid rgb(0, 0, 0, 0.07);
  }
`;

export const StyledAboutMe = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 1rem;
  max-width: 916px;
  margin: 6rem auto 3rem auto;
  padding: 1.5rem 1.75rem 0.5rem 2.25rem;
  border: 1px solid rgba(0, 0, 0, 0.06); //0.06
  border-radius: 0.85rem;

  p {
    font-size: 0.995rem;
    line-height: 1.8;
    font-family: "__GOTHAM_LS_LIGHT_cef799", "__GOTHAM_LS_LIGHT_Fallback_cef799";

    b {
      font-family: "__GOTHAM_MEDIUM_68e348", "__GOTHAM_MEDIUM_Fallback_68e348";
    }

    &:not(:first-child) {
      margin-top: 1rem; // 1.15rem
    }

    &:last-child {
      margin-top: 1.5rem;
    }
  }

  .photo-socialmedia {
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;

    img {
      border-radius: 50%;
    }
  }

  @media screen and (max-width: 820px) {
    flex-direction: column;
    height: auto;
    margin-bottom: 0;
    img {
      margin-top: 2rem;
    }
  }
`;

export const StyledTechs = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 5px;
  max-width: 90%;

  span {
    margin: 0.35rem 0.5rem 0.225rem 0;
    padding: 0.125rem 0.75rem;
    border-radius: 2.5px;
    background-color: rgba(0, 0, 0, 0.08);
    font-size: 14.5px;
    font-family: "__GOTHAM_MEDIUM_68e348", "__GOTHAM_MEDIUM_Fallback_68e348";
  }
`;

export const StyledSocialLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 1.25rem; //1.65rem

  svg {
    cursor: pointer;
    color: #000;
    font-size: 2.5rem; //2.25rem
  }

  .linkedin:hover {
    color: #0a66c2;
  }
`;

export const StyledEducation = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 4rem auto;
  padding: 0 0 0.65rem 3.25rem;
  max-width: calc(1200px - 120px);

  ul {
    display: flex;
    flex-direction: column;
    row-gap: 0.35rem;
    margin-right: 1.75rem;

    h2 {
      margin-bottom: 0.75rem;
    }

    li {
      margin-left: 1rem;
    }
  }
  img {
    width: 50%;
  }

  @media screen and (max-width: 820px) {
    flex-direction: column;
    align-items: center;
    row-gap: 1rem;
    ul {
      padding: 0 1.85rem 0 1.85rem;
    }

    img {
      width: 100%;
    }
  }
`;

export const CustomizedToolTip = styledMUI(({ className, ...props }) => (
  <Tooltip {...props} componentsProps={{ tooltip: { className: className } }} />
))(`font-size: 0.75rem;`);
