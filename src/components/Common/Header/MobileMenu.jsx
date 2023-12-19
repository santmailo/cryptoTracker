import React from 'react';
import Drawer from '@mui/material/Drawer';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { IconButton } from '@mui/material';

export default function MobileMenu() {
  const [open, setOpen] = React.useState(false);


  return (
    <div>

      <IconButton onClick={() => setOpen(true)}>
      <MenuRoundedIcon className='link'/>
      </IconButton>
        <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
        {/* Menu options comes inside Drawer*/}
        <div className='mobile-menu-links'>
          <a href='/'>
            <p className='link'>Home</p>
          </a>  
          <a href='/'>
            <p className='link'>Dashoard</p>
          </a>
          <a href='/'>
            <p className='link'>Compare</p>
          </a>
          <a href='/'>
            <p className='link'>Watchlist</p>
          </a>
      </div>
        </Drawer>
    </div>
  );
}
