import { useState } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button, IconButton, Menu, MenuItem, Box, Typography } from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
  ];

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setIsOpen(true);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setIsOpen(false);
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "white", backdropFilter: "blur(10px)", zIndex: 1200 }}>
      <Toolbar sx={{ justifyContent: "space-between", padding: "0 16px" }}>
        {/* Logo and Company Name */}
        <Box display="flex" alignItems="center">
          <img
            src="/logo/logo4.jpg"
            alt="Techyhut Solutions Logo"
            style={{ width: 100, height: 50, objectFit: "contain", marginTop: -10 }}
          />
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "secondary.main", marginTop: "22px", marginLeft: "-8px" }}>
              Solutions
            </Typography>
          </Link>
        </Box>

        {/* Desktop Navigation */}
        <Box sx={{ display: { xs: "none", lg: "flex" }, alignItems: "center" }}>
          {navItems.map((item) => (
            <Link key={item.name} to={item.path} style={{ textDecoration: "none" }}>
              <Button sx={{ color: "secondary.main", marginLeft: 2, "&:hover": { color: "primary.main" } }}>
                {item.name}
              </Button>
            </Link>
          ))}
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <Button
              sx={{
                color: 'transparent',
                backgroundImage: 'linear-gradient(to right, #6a5af8, #9b60e9)', // Gradient text
                backgroundClip: 'text',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                borderRadius: '8px', // Rounded corners for a softer look
                padding: '12px 24px', // Adjust padding for a more button-like feel
                border: '2px solid purple', // Transparent border for clean look
                position: 'relative', // For positioning the hover effect
                overflow: 'hidden', // Keeps the hover effect within bounds
                '&:hover': {
                  backgroundColor: '#6a5af8', // Solid background color on hover
                  color: 'black', // White text on hover
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)', // Subtle shadow for hover effect
                  borderColor: 'purple', // Border color matching the hover effect
                },
                transition: 'all 0.3s ease-in-out', // Smooth transition for hover effects
              }}
            >
              Contact Us
            </Button>
          </Link>

        </Box>

        {/* Mobile Navigation Toggle */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleMenuOpen}
          sx={{ display: { xs: "block", lg: "none" } }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* Mobile Menu */}
      <Menu
        anchorEl={anchorEl}
        open={isOpen}
        onClose={handleMenuClose}
        sx={{ display: { xs: "block", lg: "none" } }}
      >
        {navItems.map((item) => (
          <MenuItem key={item.name} onClick={handleMenuClose}>
            <Link to={item.path} style={{ textDecoration: "none", color: "inherit" }}>
              {item.name}
            </Link>
          </MenuItem>
        ))}
        <MenuItem onClick={handleMenuClose}>
        <Link to="/contact" style={{ textDecoration: "none" }}>
            <Button
              sx={{
                color: 'transparent',
                backgroundImage: 'linear-gradient(to right, #6a5af8, #9b60e9)', // Gradient text
                backgroundClip: 'text',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                borderRadius: '8px', // Rounded corners for a softer look
                padding: '12px 24px', // Adjust padding for a more button-like feel
                border: '2px solid purple', // Transparent border for clean look
                position: 'relative', // For positioning the hover effect
                overflow: 'hidden', // Keeps the hover effect within bounds
                '&:hover': {
                  backgroundColor: '#6a5af8', // Solid background color on hover
                  color: 'black', // White text on hover
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)', // Subtle shadow for hover effect
                  borderColor: 'purple', // Border color matching the hover effect
                },
                transition: 'all 0.3s ease-in-out', // Smooth transition for hover effects
              }}
            >
              Contact Us
            </Button>
          </Link>
        </MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navigation;
