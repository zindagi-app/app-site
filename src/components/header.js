import { Link } from "gatsby"
import React from "react"

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-header">
          <div className="logo">
            <Link to="/#home">zindagi زندگی</Link>
          </div>
          <div className="navigation">
            <nav>
              <Link to="/#aboutlink">About</Link>
              <Link to="/#contribute">Contribute</Link>
              <Link to="/#download">Download</Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
