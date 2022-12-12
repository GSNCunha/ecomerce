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
              <h4 className='sneakerCompany text'>SNEAKER COMPANY</h4>
              <h1 className='title text'>Fall Limited Edition Sneakers</h1>
              <p className='paragraph text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
              <div className='a'>
                <div className='price'>
                  <p className='priceText'>$125</p>
                </div>
                <div className='discount'>
                  <p className='textdiscount'>50%</p>
                </div>
              </div>
              <div className='linetextspacing'><h7 className="line">$150</h7></div>
              <div className='cartcontainer'>
                <div className='numerOfItems'>
                  <div className='plus'>
                    <div className='TextPlus'><p className='text pluscolor'>a</p></div>
                  </div>
                  <div className='counter'></div>
                  <div className='minus'></div>
                </div>
                <div className='AddToCart text'>
                  <p className='TextCart'>
                  <svg width="22" height="20" className='cartLogo' xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D" fill-rule="nonzero"/></svg>
                         Add to cart
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>

          );
        }
      }

      export default Header;