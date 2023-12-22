import React from "react";
import Drawer from "@mui/material/Drawer";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

export default function MobileMenu() {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <IconButton onClick={() => setOpen(true)}>
        <MenuRoundedIcon className="link" />
      </IconButton>
      <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
        {/*Menu options comes inside Drawer*/}
        <div className="mobile-menu-links">
          <Link to="/">
            <p className="link">Home</p>
          </Link>
          <Link to="/">
            <p className="link">Dashoard</p>
          </Link>
          <Link to="/">
            <p className="link">Compare</p>
          </Link>
          <Link to="/">
            <p className="link">Watchlist</p>
          </Link>
        </div>
      </Drawer>
    </div>
  );
}
