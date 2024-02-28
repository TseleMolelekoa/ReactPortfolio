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
        <Sidebar className="fixed-sidebar" style={{ height: "58vh", backgroundColor: "transparent" }}>
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
                <MenuItem>
                    <a href="#HomePage" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <HomeOutlinedIcon />
                        Home
                    </a>
                </MenuItem>
                <MenuItem>
                    <a href="#About" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <PeopleOutlinedIcon />
                        About
                    </a>
                </MenuItem>
                <MenuItem>
                    <a href="#services" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <ReceiptOutlinedIcon />
                        Services
                    </a>
                </MenuItem>
                <MenuItem>
                    <a href="#projects" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <SettingsApplicationsRoundedIcon />
                        Projects
                    </a>
                </MenuItem>
                <MenuItem>
                    <a href="#contacts" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <ContactsOutlinedIcon />
                        Contacts
                    </a>
                </MenuItem>
            </Menu>
        </Sidebar>


        <Circle />
        <div className="homepage-btns">
        <a href='https://drive.google.com/file/d/1_Iav6OxpVtFilgujNDeOTT4cczG32Wme/view?usp=sharing' className="download">
        <img src={Download} alt='download'/></a>


        <a href="#contacts" className="contact-btn">
          <img src={ContactIcon} alt="Contact Icon" />
        </a>
    </div>
    </div>
  );
};

export default HomePage;
