import React from 'react'

import TangoFB from '../images/tango-facebook-icon.svg'
import TangoIG from '../images/tango-instagram-icon.svg'
import TangoLI from '../images/tango-linkedin-icon.svg'

import { FooterWrapper } from './styles/FooterStyles.js'

const Footer = () => (
  <FooterWrapper>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="whiteText">Contact</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <h3>Jonathan Helvey</h3>
          <p className="tango-contact">
            <a href="mailto:jonathanhelvey27@gmail.com">
              jonthanhelvey@gmail.com
            </a>
          </p>
          <p className="tango-contact">(999)999-9999</p>
          <span className="social">
            <a
              target="blank"
              rel="noopener norefferrer"
              href="https://www.linkedin.com"
            >
              <img src={TangoLI} alt="linkedin" />
            </a>
          </span>
        </div>
        <div className="col-md-4">
          <h3>Frank Sinatra</h3>
          <p className="tango-contact">
            <a href="mailto:jonathanhelvey27@gmail.com">
              FrankSinatra@gmail.com
            </a>
          </p>
          <p className="tango-contact">(999)999-1111</p>
          <span className="social">
            <a
              target="blank"
              rel="noopener norefferrer"
              href="https://www.linkedin.com"
            >
              <img src={TangoLI} alt="linkedin" />
            </a>
          </span>
        </div>
        <div className="col-md-4">
          <h3>Tango Company</h3>
          <p className="tango-contact">Box 160, 101 23 Stockholm</p>
          <p className="tango-contact">Vist: Covington, Ky 16</p>
          <span className="social">
            <a
              target="blank"
              rel="noopener norefferrer"
              href="https://www.facebook.com"
            >
              <img src={TangoFB} alt="facebook" />
            </a>
            <a
              target="blank"
              rel="noopener norefferrer"
              href="https://www.instagram.com"
            >
              <img src={TangoIG} alt="InstaGram" />
            </a>
          </span>
        </div>
      </div>
    </div>
  </FooterWrapper>
)

export default Footer
