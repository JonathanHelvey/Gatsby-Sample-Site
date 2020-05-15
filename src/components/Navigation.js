import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import { NavigationWrapper } from './styles/NavigationStyles'

const Navigation = ({ menu }) => (
  <NavigationWrapper>
    <ul>
      {menu.items.map((item, index) => (
        <li key={index}>
          <Link key={item.url} activeClassName="nav-active">
            {item.title}
          </Link>
          {item.wordpress_children ? (
            <>
              <span>&#8964;</span>
              <ul>
                {item.wordpress_children.map((child, indexchild) => (
                  <li key={indexchild}>
                    <Link to={child.url} activeClassName="nav-active">
                      {child.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          ) : null}
        </li>
      ))}
    </ul>
  </NavigationWrapper>
)

Navigation.propTypes = {
  menu: PropTypes.object,
}

export default Navigation
