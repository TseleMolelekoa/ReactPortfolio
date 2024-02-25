import React from 'react';
import "./HomePage.css";
import Circle from '../circle';import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { useProSidebar } from "react-pro-sidebar";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import SettingsApplicationsRoundedIcon from "@mui/icons-material/SettingsApplicationsRounded";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";

const HomePage = () => {

  const { collapseSidebar } = useProSidebar();

  return (
    <div id='homepage-container' className='homepage-container'>
      
      <Sidebar style={{ height: "38vh" }} className='sidebar'>
        <Menu>
          <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={() => {
              collapseSidebar();
            }}
            style={{ textAlign: "center" }}
          >
            <h2>Menu</h2>
          </MenuItem>
          <MenuItem icon={<HomeOutlinedIcon />}>
            <a href="#HomePage"></a>Home</MenuItem>
          <MenuItem icon={<PeopleOutlinedIcon />} ><a href="#About">About</a></MenuItem>
          <MenuItem icon={<ReceiptOutlinedIcon />}><a href="#services">Services</a></MenuItem>
          <MenuItem icon={<SettingsApplicationsRoundedIcon />}><a href="#projects">Projects</a></MenuItem>
          <MenuItem icon={<ContactsOutlinedIcon />}><a href="#contacts">Contacts</a></MenuItem>
        </Menu>
      </Sidebar>
      <h1 className='heading'>Welcome to My React Portfolio Project</h1>
      <Circle/>
      <div className="button-container">
          <div className="downloadcv-button">
            <button className="download">Download CV</button>
          </div>
          <div className="contact-button">
            <button className="contact"><a href="#contacts">Contact Me</a></button>
          </div>
        </div>
    </div>
  );
};

export default HomePage;
