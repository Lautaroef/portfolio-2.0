import type { NavBarItem } from "types";
import Link from "next/link";
import { useState } from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { FaHamburger } from "react-icons/fa";
// Fonts
import ROBOTO from "fonts/ROBOTO";
import GOTHAM_MEDIUM from "fonts/GOTHAM_MEDIUM";

function HamburgerMenu() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const menuItems: NavBarItem[] = [
    { title: "Home", href: "/" },
    // { title: "Projects", href: "/" },
    { title: "Works", href: "/" },
    { title: "About Me", href: "/about" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <>
      <FaHamburger className="hamburger" onClick={() => setOpenMenu(true)} />
      {/* @ts-ignore */}
      <SwipeableDrawer
        anchor="right"
        open={openMenu}
        onOpen={() => setOpenMenu(true)}
        onClose={() => setOpenMenu(false)}
      >
        <div style={{ width: "200px" }}>
          <Box textAlign={"center"} p={2} className={GOTHAM_MEDIUM.className}>
            Menu
          </Box>
          <Divider />
          <List>
            {menuItems.map((item) => {
              return (
                <ListItem
                  // @ts-ignore
                  as={Link}
                  href={item.href}
                  key={item.title}
                  onClick={() => setOpenMenu(false)}
                  className={ROBOTO.className}
                  style={{ color: "rgba(0, 0, 0, 0.87)" }}
                >
                  <ListItemText>{item.title}</ListItemText>
                </ListItem>
              );
            })}
          </List>
        </div>
      </SwipeableDrawer>
    </>
  );
}

export default HamburgerMenu;
