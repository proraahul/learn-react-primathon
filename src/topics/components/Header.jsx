import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <Link to={'/post'}>
          <p>Primathon Academy</p>
      </Link>

      <nav>
        <Link to={'/create-post'}>
            create post     
        </Link>
      </nav>
    </div>
  )
}

export default Header