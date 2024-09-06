import React from 'react'
import { Link } from 'react-router-dom'
function Hero() {
  return (
    <>
        <Link to={'/trip'}>
            <button className='border border-black m-40'>get started</button>
        </Link>
    </>
  )
}

export default Hero