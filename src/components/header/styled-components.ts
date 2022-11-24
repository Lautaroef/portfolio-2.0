import Link from "next/link";
import styled from "styled-components";
import Badge from "@mui/material/Badge";

const ExtendFlexAttrs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledNavigation = styled(ExtendFlexAttrs).attrs({
  as: "nav",
})`
  max-width: 1200px;
  max-height: 46px;
  margin: 0 auto 3rem auto;
  z-index: 999;

  .hamburger {
    display: none;
    @media (max-width: 780px) {
      display: inherit;
      width: 32px;
      height: 32px;
      margin: 0.4rem 1rem;
      cursor: pointer;
    }
  }
`;

export const StyledPicture = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0.15rem 4.5vw 0 0;
  padding-left: 1rem;
  text-decoration: none;
  color: initial;

  @media (max-width: 780px) {
    flex: 1;
    justify-content: flex-start;
  }
  img {
    border-radius: 100%;
    transition: transform 0.2s ease-out;
    &:hover {
      transform: scale(1.2);
    }
    &:active {
      transform: scale(1);
    }
  }

  h3 {
    font-size: 1.95rem;
    margin-top: 0.125rem;
    margin-left: 0.625rem;
    font-weight: 500;
  }
`;

export const StyledMenu = styled(ExtendFlexAttrs).attrs({
  as: "ul",
})`
  max-height: 46px;
  margin-top: 3px;

  justify-content: space-between;
  @media (min-width: 980px) {
    flex: 0.5;
  }
  a {
    position: relative;
    padding: 0.6rem 2rem 0.6rem 2rem;
    background: #fff;
    color: #808080;
    font-size: 14.5px;
    text-decoration: none;

    &:hover {
      color: #000;
    }

    &::after {
      content: "";
      width: 100%;
      height: 0.1rem;
      position: absolute;
      bottom: 0;
      left: 0;
      background: linear-gradient(
        90deg,
        rgba(94, 79, 171, 1) 0%,
        rgba(106, 81, 164, 1) 70%,
        rgba(114, 82, 157, 1) 100%
      );
      z-index: 5;
      transform: scale(0, 1);
      transition: transform 0.33s ease-out;
    }

    &:hover::after {
      transform: scale(1, 1);
    }
  }

  div {
    margin: 2px -20px 0 0;
    padding: 1rem 0;
    background-color: #fff;
    z-index: 2;
    transform: skew(-40deg);

    button {
      margin-right: 1.11rem;
      background-color: #fff;
      border: none;
      transform: skew(40deg);
    }

    a {
      padding: 0.5rem 2rem 0.8rem 1.4rem;
    }
  }

  .activeLink {
    color: #000;
    font-weight: 600;
  }

  @media (max-width: 780px) {
    display: none;
  }
`;

export const StyledContact = styled(ExtendFlexAttrs)`
  position: relative;
  justify-content: flex-end;
  flex: 1;
  padding: 0.5rem 0;
  background: linear-gradient(
    90deg,
    rgba(94, 79, 171, 1) 0%,
    rgba(106, 81, 164, 1) 70%,
    rgba(114, 82, 157, 1) 100%
  );

  @media (min-width: 980px) {
    flex: 0.5;
  }

  /* MUI Button with router Link */
  a {
    margin-right: 1rem;
    padding: 0.3rem 1rem;
    background-color: #fff;
    color: #252525; // #2e2e2e
    font-size: 15px;
    font-weight: 500;
    border-radius: 25px;
    text-transform: unset;
    text-decoration: none;

    &:hover {
      background-color: #fff;
    }
  }
  @media (max-width: 780px) {
    display: none;
  }
`;

export const StyledBadge = styled(Badge)(() => ({
  "& .MuiBadge-badge": {
    right: -5,
    padding: "3px", // 1px 0px 0 0px
    fontSize: "0.7rem",
    // height: 18,
    // minWidth: 18,
    borderRadius: "50%",
  },
  "&": {
    fontFamily: "inherit",
  },
}));
