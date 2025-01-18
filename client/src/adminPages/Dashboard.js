import React, { useState, useEffect } from 'react';
import { Button, Typography, Box, Paper } from '@mui/material';
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import { SketchPicker } from 'react-color';
import { useVisibility } from '../VisibilityContext';

const Dashboard = () => {
  const { toggleVisibility, servicesVisible, brandsVisible, productsVisible, donateVisible } = useVisibility();

  // State to handle header/footer colors and color picker visibility
  const [headerColor, setHeaderColor] = useState('#950f0f');
  const [footerColor, setFooterColor] = useState('#0f2a95');
  const [showHeaderColorPicker, setShowHeaderColorPicker] = useState(false);
  const [showFooterColorPicker, setShowFooterColorPicker] = useState(false);

  // Load saved colors from localStorage when the component mounts
  useEffect(() => {
    const savedHeaderColor = localStorage.getItem('headerColor');
    const savedFooterColor = localStorage.getItem('footerColor');
    if (savedHeaderColor) setHeaderColor(savedHeaderColor);
    if (savedFooterColor) setFooterColor(savedFooterColor);
  }, []);

  const handleHeaderColorChange = (color) => {
    setHeaderColor(color.hex);
    localStorage.setItem('headerColor', color.hex);
  };

  const handleFooterColorChange = (color) => {
    setFooterColor(color.hex);
    localStorage.setItem('footerColor', color.hex);
  };

  return (
    <div>
      <Box sx={{ padding: '20px', backgroundColor: '#f4f6f8', boxShadow: 3 }}>
        <Typography variant="h4" sx={{ marginBottom: '20px' }}>
          Dashboard
        </Typography>

        {/* Color Picker Section */}
        <Paper sx={{ padding: '15px', marginBottom: '20px' }}>
          <Typography variant="h6">Change Header Color</Typography>
          <Button
            variant="contained"
            onClick={() => setShowHeaderColorPicker(!showHeaderColorPicker)}
            sx={{ marginBottom: '10px', width: 'auto', padding: '5px 12px', fontSize: '0.875rem' }}
          >
            {showHeaderColorPicker ? 'Close Header Color Picker' : 'Open Header Color Picker'}
          </Button>
          {showHeaderColorPicker && (
            <SketchPicker color={headerColor} onChangeComplete={handleHeaderColorChange} />
          )}

          <Typography variant="h6" sx={{ marginTop: '20px' }}>
            Change Footer Color
          </Typography>
          <Button
            variant="contained"
            onClick={() => setShowFooterColorPicker(!showFooterColorPicker)}
            sx={{ marginBottom: '10px', width: 'auto', padding: '5px 12px', fontSize: '0.875rem' }}
          >
            {showFooterColorPicker ? 'Close Footer Color Picker' : 'Open Footer Color Picker'}
          </Button>
          {showFooterColorPicker && (
            <SketchPicker color={footerColor} onChangeComplete={handleFooterColorChange} />
          )}
        </Paper>

        {/* Toggle Buttons */}
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: '10px', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <Button
            variant="contained"
            color={servicesVisible ? 'primary' : 'error'}
            onClick={() => toggleVisibility('services')}
            startIcon={servicesVisible ? <ExpandLess /> : <ExpandMore />}
            sx={{ padding: '5px 12px', fontSize: '0.875rem', minWidth: '120px' }} // Set minWidth to ensure buttons are not too small
          >
            {servicesVisible ? 'Close Services' : 'Open Services'}
          </Button>

          <Button
            variant="contained"
            color={brandsVisible ? 'primary' : 'error'}
            onClick={() => toggleVisibility('brands')}
            startIcon={brandsVisible ? <ExpandLess /> : <ExpandMore />}
            sx={{ padding: '5px 12px', fontSize: '0.875rem', minWidth: '120px' }}
          >
            {brandsVisible ? 'Close Brands' : 'Open Brands'}
          </Button>

          <Button
            variant="contained"
            color={productsVisible ? 'primary' : 'error'}
            onClick={() => toggleVisibility('products')}
            startIcon={productsVisible ? <ExpandLess /> : <ExpandMore />}
            sx={{ padding: '5px 12px', fontSize: '0.875rem', minWidth: '120px' }}
          >
            {productsVisible ? 'Close Products' : 'Open Products'}
          </Button>

          <Button
            variant="contained"
            color={donateVisible ? 'primary' : 'error'}
            onClick={() => toggleVisibility('donate')}
            startIcon={donateVisible ? <ExpandLess /> : <ExpandMore />}
            sx={{ padding: '5px 12px', fontSize: '0.875rem', minWidth: '120px' }}
          >
            {donateVisible ? 'Close Donate' : 'Open Donate'}
          </Button>
        </Box>

      </Box>
    </div>
  );
};

export default Dashboard;
