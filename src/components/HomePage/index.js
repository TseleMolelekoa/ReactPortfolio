import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './HomePage.css';
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
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
            <Sidebar className="fixed-sidebar" style={{height: "50vh", backgroundColor: "transparent", borderRadius: "5vh"}}>
                <Menu>
                    <MenuItem
                        icon={<MenuOutlinedIcon/>}
                        onClick={() => {
                            collapseSidebar();
                        }}
                        style={{textAlign: "left"}}
                    >
                        <h2>Menu</h2>
                    </MenuItem>
                    <MenuItem>
                        <a href="#HomePage" style={{textDecoration: 'none', color: 'inherit'}}>
                            <HomeOutlinedIcon/>
                            Home
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <a href="#About" style={{textDecoration: 'none', color: 'inherit'}}>
                            <PeopleOutlinedIcon/>
                            About
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <a href="#services" style={{textDecoration: 'none', color: 'inherit'}}>
                            <ReceiptOutlinedIcon/>
                            Services
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <a href="#projects" style={{textDecoration: 'none', color: 'inherit'}}>
                            <SettingsApplicationsRoundedIcon/>
                            Projects
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <a href="#contact-form" style={{textDecoration: 'none', color: 'inherit'}}>
                            <ContactsOutlinedIcon/>
                            Contacts
                        </a>
                    </MenuItem>
                </Menu>
            </Sidebar>
            <div className="homepage-btns">
                <button className="btn-download"
                        onClick={() => window.open('https://drive.google.com/file/d/1_Iav6OxpVtFilgujNDeOTT4cczG32Wme/view?usp=sharing', '_blank')}>
                    Download
                </button>
                <button className="btn-contact" onClick={() => window.location.href = "#contact-form"}>
                    Contact Me
                </button>
        </div>
</div>
);
};

export default HomePage;
