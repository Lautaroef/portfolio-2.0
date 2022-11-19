"use client";

import type { ProjectWithTechnologies } from "types";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import scrollReveal from "../animations/ScrollReveal";
import pfp0 from "../../images/tono-blancon.jpeg";
import SidebarMenu from "./SidebarMenu";
import Button from "@mui/material/Button";
import {
  StyledPicture,
  StyledMenu,
  StyledNavigation,
  StyledContact,
  StyledBadge,
} from "./styled-components";

function NavigationBar({ projects }: { projects: ProjectWithTechnologies[] }) {
  const pathname = usePathname();
  // Scroll Animation
  const scrollNavbar = useRef<HTMLDivElement>();
  useEffect(() => {
    if (scrollNavbar.current) {
      scrollReveal.reveal(scrollNavbar.current, {
        origin: "top",
        duration: 700,
        distance: "20px",
        delay: 100,
      });
    }
  }, []);

  return (
    // @ts-ignore
    <StyledNavigation ref={scrollNavbar}>
      {/* @ts-ignore */}
      <StyledPicture href="/about">
        <Image src={pfp0} alt="Lautaro Figueroa" />
        <h3>Lautaro Figueroa</h3>
      </StyledPicture>
      <StyledMenu>
        <Link href="/" className={pathname === "/" ? "activeLink" : ""}>
          Home
        </Link>
        <a href="/#my-projects" className={pathname === "/projects" ? "activeLink" : ""}>
          <StyledBadge badgeContent={(projects && projects.length) || "..."} color="primary">
            Projects
          </StyledBadge>
        </a>
        <div>
          <button>
            <Link href="/about" className={pathname === "/about" ? "activeLink" : ""}>
              About Me
            </Link>
          </button>
        </div>
      </StyledMenu>
      <StyledContact>
        {/* @ts-ignore */}
        <Button component={Link} href="/contact">
          Contact
        </Button>
      </StyledContact>
      {/* Hamburger Menu */}
      <SidebarMenu />
    </StyledNavigation>
  );
}

export default NavigationBar;
