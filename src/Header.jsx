import { AppBar, Toolbar, Typography, Container } from '@material-ui/core';
import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { fade, makeStyles } from '@material-ui/core/styles';
import logo5 from './images/logo5.png';
import { Grid } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';



const useStyles = makeStyles ( () => ({
    typographyStyles: {
        flex: 1,
        color: "black"
    },
    logoStyle: {
        maxWidth: 150,
        maxHeight: 35, 
        marginLeft: 100,
        marginBottom: 7
    },
    buttonStyle: {
        fontFamily: "Helvetica",
        padding: 12,
        
       
     },

    loginStyle: {
        background: "#008080",
        color: "white",
        textDecoration: "none"
        
    }

}));




const Header = () => {
    const classes = useStyles();

    return (

        
        <Navbar  bg="light" expand="xl">
 
  <Link to='./'>
  <Navbar.Brand className="ml-5" href="#home">
      <img
        alt=""
        src={logo5}
        width="150"
        height="35"
        className="d-inline-block align-top"
      />{' '}
     
    </Navbar.Brand>

    </Link>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto ml-3">
      
      <Link to='/courses' style={{marginLeft: "4%", textDecoration: "none"}}>
      <Button variant="light" size="m">Courses</Button>
                      </Link>
     
     
    </Nav>
      <Link to='./login'>
      <Button  className="mr-5" variant="outline-success">Login</Button>
      </Link>
      
  </Navbar.Collapse>
</Navbar>

    // <AppBar position="fixed" style={{backgroundColor: "white"}}>
    //     <Toolbar style={{display:"flex", justifyContent: "flex-start"}}>
           
    //                 <Link to='./'>
    //                 <img className = {classes.logoStyle} src={logo5} />;
    //                 </Link>

    //                  <Link to='/courses' className={classes.buttonStyle} style={{marginLeft: "4%", textDecoration: "none"}}>
    //                  <Button variant="outline-info">Courses</Button>{' '}
    //                  </Link>

    //                 <Link  style={{ marginLeft: "auto", marginRight: "8%", textDecoration: "none" }}>
                     
    //                  <Button variant="outline-info">Login</Button>{' '}
    //                  </Link>
                     

                     
                     
                     
                     
                     

                     
                     
               
        
    //     </Toolbar>
    // </AppBar>;
        
    )
}

export default Header;

