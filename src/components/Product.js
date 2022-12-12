import React, { Component } from 'react';
import mainproduct from './images/image-product-1.jpg';
import product1 from "./images/image-product-1-thumbnail.jpg";
import product2 from "./images/image-product-2-thumbnail.jpg";
import product3 from "./images/image-product-3-thumbnail.jpg";
import product4 from "./images/image-product-4-thumbnail.jpg";

class Header extends Component {
    render() {
  
      return (

        <div className='container2'>
          <div className='container3'>
            <div >
              <div className='mainproduct' ><img className='photoMain' src={mainproduct} alt="main product photo" width="480" height="480"></img></div>
            </div>
            <div className='container4'>
              <div className='product'>
                <img className='photoProduct' src={product1} alt="product 1 thumbmail " width="100" height="100"></img>
              </div>
              <div className='product'>
              <img className='photoProduct' src={product2} alt="product 2 thumbmail " width="100" height="100"></img>
              </div>
              <div className='product'>
              <img className='photoProduct' src={product3} alt="product 3 thumbmail " width="100" height="100"></img>
              </div>
              <div className='product'>
              <img className='photoProduct' src={product4} alt="product 4 thumbmail " width="100" height="100"></img>
              </div>
            </div>
          </div>
          <div>
            <div className='textSpacing'>
              <h4 className='sneakerCompany'>SNEAKER COMPANY</h4>
              <h1 className='title'>Fall Limited Sneakers</h1>
              <h6 className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in </h6>
            </div>
          </div>
        </div>

          );
        }
      }

      export default Header;