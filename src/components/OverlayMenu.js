import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import WhiteLogo from '../images/tango_logo_white.svg'
import CloseButton from '../images/tango_close_button.svg'

import { Overlay } from './styles/OverlayMenuStyles'

const OverlayMenu = ({ menuOpen, callBack }) => {
  const {
    menu: {
      edges: [{ node: menu }],
    },
  } = useStaticQuery(
    graphql`
      query OverlayMenu {
        menu: allWordpressWpApiMenusMenusItems(
          filter: { wordpress_id: { eq: 5 } }
        ) {
          totalCount
          edges {
            node {
              items {
                title
                url
              }
            }
          }
        }
      }
    `
  )
  return (
    <Overlay menuOpen={menuOpen}>
      <div className="inner">
        <img className="whitelogo" src={WhiteLogo} alt="tango-white-logo" />
        <ul className="overlayMenu">
          {menu.items.map((item, i) => (
            <li key={i}>
              <Link to={item.url} activeClassName="overlayActive">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <div
          className="closeButton"
          onClick={callBack}
          role="button"
          tabIndex="0"
          onKeyDown={callBack}
        >
          <img src={CloseButton} alt="tango-class-close-button" />
        </div>
      </div>
    </Overlay>
  )
}

export default OverlayMenu
