import React, { useState } from 'react';
import { Drawer, Menu, MenuItem, Button, List, ListItem, ListItemText, Divider, Box, Typography, ListItemIcon } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router-dom';
import { Dashboard, Settings, Person, ExitToApp, Notifications, Widgets, Pages, InsertEmoticon, Slideshow, Edit, PhotoLibrary, RateReview, LibraryBooks } from '@mui/icons-material';
import InfoIcon from '@mui/icons-material/Info'; // You can replace this with any other icon
import ContactsIcon from '@mui/icons-material/Contacts'; // Import the Contacts icon
import { HealthAndSafety } from '@mui/icons-material'; // Importing a doctor-related icon
import { Map, ExpandMore, Update } from '@mui/icons-material'; // Import the Map icon
import { AddCircle } from '@mui/icons-material';
import { FaFacebookF } from 'react-icons/fa';  // Importing the Facebook icon from react-icons

const Sidebar = ({ open, toggleDrawer }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [faqAnchorEl, setFaqAnchorEl] = useState(null);

    const [anchorElLogo, setAnchorElLogo] = useState(null);

    const [aboutAnchorEl, setAboutAnchorEl] = useState(null);

    const [servicesAnchorEl, setServicesAnchorEl] = useState(null);

    const handleServicesClick = (event) => setServicesAnchorEl(event.currentTarget);
    const handleServicesClose = () => setServicesAnchorEl(null);
    const [homeServicesAnchorEl, setHomeServicesAnchorEl] = useState(null);

    const handleHomeServicesClick = (event) => {
        setHomeServicesAnchorEl(event.currentTarget);
    };

    const handleHomeServicesClose = () => {
        setHomeServicesAnchorEl(null);
    };

    const handleAboutClick = (event) => {
        setAboutAnchorEl(event.currentTarget);
    };

    const handleFaqClick = (event) => {
        setFaqAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAboutAnchorEl(null);
        setFaqAnchorEl(null);
    };

    const handleOpenLogoMenu = (event) => {
        setAnchorElLogo(event.currentTarget); // Set the button as the anchor
    };

    const handleCloseLogoMenu = () => {
        setAnchorElLogo(null);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };





    const handleCloseFaq = () => {
        setFaqAnchorEl(null);
    };

    return (
        <Drawer
            sx={{
                width: open ? 240 : 60,
                backgroundColor: 'black',
                boxSizing: 'border-box',
                color: 'white',
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: open ? 240 : 60,
                    boxSizing: 'border-box',
                    backgroundColor: 'black',
                    color: 'white',
                    paddingTop: '10px', // Padding for top spacing
                },
            }}
            variant="persistent"
            anchor="left"
            open={open}
        >
            <Box sx={{ width: open ? 240 : 60, color: 'white' }}>
                {/* Admin Panel Heading */}
                {open && (
                    <Typography
                        variant="h6"
                        sx={{
                            padding: '16px',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            color: 'white',
                        }}
                    >
                        Admin Panel
                    </Typography>
                )}

                <List>
                    {/* Dashboard Link */}
                    <ListItem button component={Link} to="/admin/" sx={{ color: 'white', '&:hover': { backgroundColor: 'gray' } }}>
                        <ListItemIcon sx={{ color: 'white' }}>
                            <Dashboard />
                        </ListItemIcon>
                        {open && <ListItemText primary="Dashboard" sx={{ color: 'white' }} />}
                    </ListItem>

                    {/* Logo Link */}
                    <Button
                        aria-controls="logo-menu"
                        aria-haspopup="true"
                        onClick={handleOpenLogoMenu}
                        startIcon={<Menu />}
                        endIcon={<ArrowDropDownIcon />}
                        sx={{
                            backgroundColor: '#1976d2',
                            color: 'white',
                            '&:hover': { backgroundColor: '#1565c0' },
                            padding: '8px 16px',
                            borderRadius: '8px',
                            marginBottom: '10px',
                            width: '100%',
                        }}
                    >
                        Header Section
                    </Button>

                    {/* Dropdown Menu */}
                    <Menu
                        id="logo-menu"
                        anchorEl={anchorElLogo}
                        open={Boolean(anchorElLogo)}
                        onClose={handleCloseLogoMenu}
                    >
                        <MenuItem component={Link} to="/admin/logo" onClick={handleCloseLogoMenu}>
                            <ListItemIcon>
                                <InsertEmoticon />
                            </ListItemIcon>
                            <ListItemText primary="Change Logo" />
                        </MenuItem>

                        <MenuItem component={Link} to="/admin/logo-name" onClick={handleCloseLogoMenu}>
                            <ListItemIcon>
                                <Edit />
                            </ListItemIcon>
                            <ListItemText primary="Change Logo Name" />
                        </MenuItem>
                    </Menu>

                    {/* Change About Section Button */}
                    <Button
                        aria-controls="change-about-menu"
                        aria-haspopup="true"
                        onClick={handleAboutClick}
                        variant="contained"
                        color="primary"
                        endIcon={<ArrowDropDownIcon />}
                        sx={{
                            marginBottom: '10px',
                            width: '100%',
                            '&:hover': { backgroundColor: '#1565c0' },
                        }}
                    >
                        About Section
                    </Button>
                    {/* About Section Dropdown Menu */}
                    <Menu
                        id="change-about-menu"
                        anchorEl={aboutAnchorEl}
                        open={Boolean(aboutAnchorEl)}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                    >
                        <MenuItem component={Link} to="/admin/image" onClick={handleClose}>
                            <ListItemIcon>
                                <InsertEmoticon />
                            </ListItemIcon>
                            <ListItemText primary="Change About Image" />
                        </MenuItem>
                        <MenuItem component={Link} to="/admin/details" onClick={handleClose}>
                            <ListItemIcon>
                                <Edit />
                            </ListItemIcon>
                            <ListItemText primary="Change About Details" />
                        </MenuItem>
                    </Menu>

                    {/* FAQ Button */}
                    <Button
                        aria-controls="change-about-menu"
                        aria-haspopup="true"
                        onClick={handleFaqClick}
                        variant="contained"
                        color="primary"
                        endIcon={<ArrowDropDownIcon />}
                        sx={{
                            marginBottom: '10px',
                            width: '100%',
                            '&:hover': { backgroundColor: '#1565c0' },
                        }}
                    >
                        FAQ
                    </Button>
                    {/* FAQ Dropdown Menu */}
                    <Menu
                        id="faq-menu"
                        anchorEl={faqAnchorEl}
                        open={Boolean(faqAnchorEl)}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                    >
                        <MenuItem component={Link} to="/admin/male-fertility" onClick={handleClose}>
                            <ListItemIcon>
                                <Update />
                            </ListItemIcon>
                            <ListItemText primary="Update MaleInfertility" />
                        </MenuItem>
                        <MenuItem component={Link} to="/admin/female-fertility" onClick={handleClose}>
                            <ListItemIcon>
                                <Update />
                            </ListItemIcon>
                            <ListItemText primary="Update FemaleInfertility" />
                        </MenuItem>
                        <MenuItem component={Link} to="/admin/fertility" onClick={handleClose}>
                            <ListItemIcon>
                                <Update />
                            </ListItemIcon>
                            <ListItemText primary="Update Infertility" />
                        </MenuItem>
                        <MenuItem component={Link} to="/admin/hysteroscopy" onClick={handleClose}>
                            <ListItemIcon>
                                <Update />
                            </ListItemIcon>
                            <ListItemText primary="Update Hysteroscopy" />
                        </MenuItem>
                    </Menu>

                    {/* Services Button and Dropdown */}
                    <Button
                        aria-controls="services-menu"
                        aria-haspopup="true"
                        onClick={handleServicesClick}
                        variant="contained"
                        color="secondary"
                        endIcon={<ArrowDropDownIcon />}
                        sx={{
                            marginBottom: '10px',
                            width: '100%',
                            '&:hover': { backgroundColor: '#ff4081' },
                        }}
                    >
                        Services
                    </Button>
                    <Menu
                        id="services-menu"
                        anchorEl={servicesAnchorEl}
                        open={Boolean(servicesAnchorEl)}
                        onClose={handleServicesClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                    >
                        <MenuItem component={Link} to="/admin/services" onClick={handleServicesClose}>
                            <ListItemIcon>
                                <Update />
                            </ListItemIcon>
                            <ListItemText primary="Services" />
                        </MenuItem>
                        <MenuItem component={Link} to="/admin/service-item" onClick={handleServicesClose}>
                            <ListItemIcon>
                                <Update />
                            </ListItemIcon>
                            <ListItemText primary="Service Item" />
                        </MenuItem>
                    </Menu>
                    {/* Home Services Button and Dropdown */}
                    <Button
                        aria-controls="home-services-menu"
                        aria-haspopup="true"
                        onClick={handleHomeServicesClick}
                        variant="contained"
                        color="secondary"
                        endIcon={<ArrowDropDownIcon />}
                        sx={{
                            marginBottom: '10px',
                            width: '100%',
                            '&:hover': { backgroundColor: '#ff4081' },
                        }}
                    >
                        Home Services
                    </Button>
                    <Menu
                        id="home-services-menu"
                        anchorEl={homeServicesAnchorEl}
                        open={Boolean(homeServicesAnchorEl)}
                        onClose={handleHomeServicesClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                    >
                        <MenuItem component={Link} to="/admin/home-service" onClick={handleHomeServicesClose}>
                            <ListItemIcon>
                                <Update />
                            </ListItemIcon>
                            <ListItemText primary="Home Service" />
                        </MenuItem>
                        <MenuItem component={Link} to="/admin/home-service-item" onClick={handleHomeServicesClose}>
                            <ListItemIcon>
                                <Update />
                            </ListItemIcon>
                            <ListItemText primary="Home Service Item" />
                        </MenuItem>
                    </Menu>

                    <ListItem
                        button
                        component={Link}
                        to="/admin/social-media"
                        sx={{ color: 'white', '&:hover': { backgroundColor: 'gray' } }}
                    >
                        <ListItemIcon sx={{ color: 'white' }}>
                            <FaFacebookF style={{ fontSize: '24px' }} /> {/* Social Media Icon (Facebook in this case) */}
                        </ListItemIcon>
                        {open && <ListItemText primary="Update Social Media" sx={{ color: 'white' }} />}
                    </ListItem>

                    {/* Slider Link */}
                    <ListItem button component={Link} to="/admin/slider" sx={{ color: 'white', '&:hover': { backgroundColor: 'gray' } }}>
                        <ListItemIcon sx={{ color: 'white' }}>
                            <Slideshow />
                        </ListItemIcon>
                        {open && <ListItemText primary="Change Slider Images" sx={{ color: 'white' }} />}
                    </ListItem>

                    {/* Gallery Link */}
                    <ListItem button component={Link} to="/admin/gallery" sx={{ color: 'white', '&:hover': { backgroundColor: 'gray' } }}>
                        <ListItemIcon sx={{ color: 'white' }}>
                            <PhotoLibrary />
                        </ListItemIcon>
                        {open && <ListItemText primary="Change Gallery Images" sx={{ color: 'white' }} />}
                    </ListItem>


                    {/* Contacts Link */}
                    <ListItem button component={Link} to="/admin/contacts" sx={{ color: 'white', '&:hover': { backgroundColor: 'gray' } }}>
                        <ListItemIcon sx={{ color: 'white' }}>
                            <ContactsIcon />
                        </ListItemIcon>
                        {open && <ListItemText primary="Change Contact Details" sx={{ color: 'white' }} />}
                    </ListItem>

                    <ListItem button component={Link} to="/admin/add-review" sx={{ color: 'white', '&:hover': { backgroundColor: 'gray' } }}>
                        <ListItemIcon sx={{ color: 'white' }}>
                            <RateReview />
                        </ListItemIcon>
                        {open && <ListItemText primary="Add Reviews" sx={{ color: 'white' }} />}
                    </ListItem>

                    <ListItem button component={Link} to="/admin/doctor-staff" sx={{ color: 'white', '&:hover': { backgroundColor: 'gray' } }}>
                        <ListItemIcon sx={{ color: 'white' }}>
                            <HealthAndSafety /> {/* Changed icon to HealthAndSafety */}
                        </ListItemIcon>
                        {open && <ListItemText primary="Add Doctor" sx={{ color: 'white' }} />}
                    </ListItem>
                    <ListItem button component={Link} to="/admin/blogList" sx={{ color: 'white', '&:hover': { backgroundColor: 'gray' } }}>
                        <ListItemIcon sx={{ color: 'white' }}>
                            <LibraryBooks />  {/* Use LibraryBooks icon if preferred */}
                        </ListItemIcon>
                        {open && <ListItemText primary="Add Blogs" sx={{ color: 'white' }} />}
                    </ListItem>


                    <ListItem
                        button
                        component={Link}
                        to="/admin/map"
                        sx={{ color: 'white', '&:hover': { backgroundColor: 'gray' } }}
                    >
                        {/* Replace ListItemIcon with the Map icon */}
                        <Map sx={{ color: 'white', marginRight: open ? 2 : 0 }} />

                        {open && <ListItemText primary="Add Map" sx={{ color: 'white' }} />}
                    </ListItem>

                    {/* Profile Link */}
                    <ListItem button component={Link} to="/admin/profile" sx={{ color: 'white', '&:hover': { backgroundColor: 'gray' } }}>
                        <ListItemIcon sx={{ color: 'white' }}>
                            <Person />
                        </ListItemIcon>
                        {open && <ListItemText primary="Profile" sx={{ color: 'white' }} />}
                    </ListItem>

                    {/* Notifications Link */}
                    <ListItem button component={Link} to="/admin/notifications" sx={{ color: 'white', '&:hover': { backgroundColor: 'gray' } }}>
                        <ListItemIcon sx={{ color: 'white' }}>
                            <Notifications />
                        </ListItemIcon>
                        {open && <ListItemText primary="Notifications" sx={{ color: 'white' }} />}
                    </ListItem>

                    {/* Widgets Link */}
                    <ListItem button component={Link} to="/admin/widgets" sx={{ color: 'white', '&:hover': { backgroundColor: 'gray' } }}>
                        <ListItemIcon sx={{ color: 'white' }}>
                            <Widgets />
                        </ListItemIcon>
                        {open && <ListItemText primary="Widgets" sx={{ color: 'white' }} />}
                    </ListItem>

                    {/* Pages Link */}
                    <ListItem button component={Link} to="/admin/pages" sx={{ color: 'white', '&:hover': { backgroundColor: 'gray' } }}>
                        <ListItemIcon sx={{ color: 'white' }}>
                            <Pages />
                        </ListItemIcon>
                        {open && <ListItemText primary="Pages" sx={{ color: 'white' }} />}
                    </ListItem>

                    {/* Settings Link */}
                    <ListItem button component={Link} to="/admin/settings" sx={{ color: 'white', '&:hover': { backgroundColor: 'gray' } }}>
                        <ListItemIcon sx={{ color: 'white' }}>
                            <Settings />
                        </ListItemIcon>
                        {open && <ListItemText primary="Settings" sx={{ color: 'white' }} />}
                    </ListItem>

                    {/* Logout Link */}
                    <Divider sx={{ backgroundColor: 'white' }} />
                    <ListItem button sx={{ color: 'white', '&:hover': { backgroundColor: 'gray' } }}>
                        <ListItemIcon sx={{ color: 'white' }}>
                            <ExitToApp />
                        </ListItemIcon>
                        {open && <ListItemText primary="Logout" sx={{ color: 'white' }} />}
                    </ListItem>
                </List>
            </Box>
        </Drawer>
    );
};

export default Sidebar;
