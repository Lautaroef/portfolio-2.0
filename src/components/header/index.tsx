"use client";

import type { ProjectWithTechnologies } from "types";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import pfp0 from "../../images/tono-blancon.jpeg";
import SidebarMenu from "./SidebarMenu";
import {
  StyledPicture,
  StyledMenu,
  StyledNavigation,
  StyledContact,
  StyledBadge,
} from "./styled-components";
// Fonts
import QUITE_MAGICAL from "fonts/QUITE_MAGICAL";
import GOTHAM_LS_LIGHT from "fonts/GOTHAM_LS_LIGHT";
import GOTHAM_MEDIUM from "fonts/GOTHAM_MEDIUM";

function Header({ projects }: { projects: ProjectWithTechnologies[] }) {
  const pathname = usePathname();
  // Scroll Animation
  const scrollNavbar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function animate() {
      if (scrollNavbar.current) {
        const scrollReveal = (await import("../animations/ScrollReveal"))
          .default;
        scrollReveal.reveal(scrollNavbar.current, {
          origin: "top",
          duration: 700,
          distance: "20px",
          delay: 100,
        });
      }
    }
    animate();
  }, []);

  return (
    <StyledNavigation ref={scrollNavbar}>
      <StyledPicture href="/about">
        <Image src={pfp0} alt="Lautaro Figueroa" />
        <h3 className={QUITE_MAGICAL.className}>Lautaro Figueroa</h3>
      </StyledPicture>
      <StyledMenu>
        <Link
          href="/"
          className={`${pathname === "/" ? "activeLink" : ""} ${
            GOTHAM_LS_LIGHT.className
          }`}
        >
          Home
        </Link>
        <a
          href="/#my-projects"
          className={`${pathname === "/projects" ? "activeLink" : ""} ${
            GOTHAM_LS_LIGHT.className
          }`}
        >
          <StyledBadge
            badgeContent={(projects && projects.length) || "..."}
            color="primary"
          >
            Projects
          </StyledBadge>
        </a>
        <div>
          <button>
            <Link
              href="/about"
              className={`${pathname === "/about" ? "activeLink" : ""} ${
                GOTHAM_LS_LIGHT.className
              }`}
            >
              About Me
            </Link>
          </button>
        </div>
      </StyledMenu>
      <StyledContact>
        <Link href="/contact" className={GOTHAM_MEDIUM.className}>
          Contact
        </Link>
      </StyledContact>
      {/* Hamburger Menu */}
      <SidebarMenu />
    </StyledNavigation>
  );
}

export default Header;
