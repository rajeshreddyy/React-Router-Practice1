// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className=".bg-container">
    <div className="container">
      <div className="wave-container">
        <img
          alt="wave"
          className="wave-img"
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        />
        <h1 className="wave-heading">Wave</h1>
      </div>
      <ul className="nav-bar-container">
        <li>
          <Link to="/" className="nav-item">
            {' '}
            Home{' '}
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-item">
            {' '}
            About{' '}
          </Link>
        </li>
        <li>
          <Link to="/contact" className="nav-item">
            {' '}
            Contact{' '}
          </Link>
        </li>
      </ul>
    </div>
  </div>
)

export default Header
