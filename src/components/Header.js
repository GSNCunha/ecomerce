import React, { Component } from 'react';


class Header extends Component {
    render() {
  
      return (


        <header id="home">

        <nav id="nav-wrap">
  
           <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
  
           <ul id="nav" className="nav">
              <li className="current"><a className="smoothscroll" href="#home">Collections</a></li>
              <li><a className="smoothscroll" href="#Man">Man</a></li>
              <li><a className="smoothscroll" href="#Woman">Woman</a></li>
              <li><a className="smoothscroll" href="#About">About</a></li>
              <li><a className="smoothscroll" href="#contact">Contact</a></li>
              
           </ul>
  
        </nav>
     </header>
          );
        }
      }

      export default Header;