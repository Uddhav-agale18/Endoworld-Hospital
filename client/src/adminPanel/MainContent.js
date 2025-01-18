import React, { useState } from 'react';
import { Box, AppBar, Toolbar, Typography, IconButton, Container } from '@mui/material';
import Sidebar from './Sidebar';
import { Outlet, useNavigate } from 'react-router-dom';
import { Menu, ExitToApp, Home } from '@mui/icons-material';
import { useDispatch } from 'react-redux'; // Import dispatch from react-redux
import { logout } from '../adminPages/adminLogin/adminSlice'; // Import the logout action
import Swal from 'sweetalert2'; // Import SweetAlert2 for the alert

const MainContent = () => {
    const [open, setOpen] = useState(true);
    const navigate = useNavigate();
    const dispatch = useDispatch(); // Initialize dispatch

    // Toggle sidebar
    const toggleDrawer = () => setOpen(!open);

    // Handle logout
    const handleLogout = () => {
        localStorage.removeItem('token'); // Remove the token from localStorage
        dispatch(logout()); // Dispatch the logout action to reset Redux state

        // Show success logout alert
        Swal.fire({
            title: 'Logged Out',
            text: 'You have been successfully logged out.',
            icon: 'success',
            confirmButtonText: 'OK'
        }).then(() => {
            navigate('/admin/login'); // Redirect to login page after the alert
        });
    };

    // Handle view site
    const handleViewSite = () => {
        navigate('/'); // Redirect to the main webpage (home page)
    };

    return (
        <Box sx={{ display: 'flex', height: '100vh' }}>
            <Sidebar open={open} toggleDrawer={toggleDrawer} />

            <Box
                sx={{
                    flexGrow: 1,
                    backgroundColor: '#f4f6f9',
                    transition: 'margin-left 0.3s ease',
                    overflowY: 'auto', // Allow vertical scrolling
                    height: '100vh',   // Ensure it takes full height of the viewport
                }}
            >
                <AppBar position="sticky" sx={{ backgroundColor: '#1976d2', zIndex: 1 }}>
                    <Toolbar>
                        {/* Sidebar Toggle Button */}
                        <IconButton edge="start" onClick={toggleDrawer} sx={{ color: 'white' }}>
                            <Menu />
                        </IconButton>

                        {/* Title */}
                        <Typography variant="h6" sx={{ flexGrow: 1 }} />

                        {/* View Site Button */}
                        <IconButton
                            edge="end"
                            sx={{
                                color: 'white',
                                padding: '6px',
                                marginRight: '10px', // Add spacing between buttons
                            }}
                            onClick={handleViewSite}
                        >
                            <Home sx={{ fontSize: 24, marginRight: '4px' }} />
                            <Typography variant="body2" sx={{ fontSize: '1rem' }}>View Site</Typography>
                        </IconButton>

                        {/* Logout Button */}
                        <IconButton
                            edge="end"
                            sx={{
                                color: 'white',
                                padding: '6px',
                            }}
                            onClick={handleLogout}
                        >
                            <ExitToApp sx={{ fontSize: 24, marginRight: '4px' }} />
                            <Typography variant="body2" sx={{ fontSize: '1rem' }}>Logout</Typography>
                        </IconButton>
                    </Toolbar>
                </AppBar>

                {/* Main Content Area */}
                <Container sx={{ marginTop: '10px', paddingTop: '10px', overflowY: 'auto' }}>
                    <Outlet />
                </Container>
            </Box>
        </Box>
    );
};

export default MainContent;
