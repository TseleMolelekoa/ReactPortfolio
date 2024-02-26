import React from 'react';
import "./HomePage.css";
import Circle from '../circle';
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { useProSidebar } from "react-pro-sidebar";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import SettingsApplicationsRoundedIcon from "@mui/icons-material/SettingsApplicationsRounded";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import Download  from "../assets/1216583_download_data_document_file_folder_icon.png";
import ContactIcon from "../assets/211731_contact_icon.png"; // Import the contact icon

const HomePage = () => {
  const { collapseSidebar } = useProSidebar();

  return (
    <div id='homepage-container' className='homepage-container'>
      <Sidebar style={{ height: "58vh", backgroundColor: "transparent" }} >
        <Menu>
          <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={() => {
              collapseSidebar();
            }}
            style={{ textAlign: "left" }}
          >
            <h2>Menu</h2>
          </MenuItem>
          <MenuItem icon={<HomeOutlinedIcon />}><a href="#HomePage">Home</a></MenuItem>
          <MenuItem icon={<PeopleOutlinedIcon />}><a href="#About">About</a></MenuItem>
          <MenuItem icon={<ReceiptOutlinedIcon />}><a href="#services">Services</a></MenuItem>
          <MenuItem icon={<SettingsApplicationsRoundedIcon />}><a href="#projects">Projects</a></MenuItem>
          <MenuItem icon={<ContactsOutlinedIcon />}><a href="#contacts">Contacts</a></MenuItem>
        </Menu>
      </Sidebar>
      <Circle />
      <button className="download">
        <a href='../assets/TseleMolelekoa.pdf'>
        <img src={Download} alt='download'/></a>
      </button>
      <button className="contact">
        <a href="#contacts">
          <img src={ContactIcon} alt="Contact Icon" />
        </a>
      </button>
    </div>
  );
};

export default HomePage;
