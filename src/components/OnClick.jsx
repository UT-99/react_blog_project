import React from 'react'
import './OnClick.css'
import { Link, useLocation } from 'react-router-dom'

const OnClick = () => {
    const prop = useLocation()
    
  return (
    <>
        <div className='flex'><img src={prop.state.src} alt="" /></div>
        <Link to='/bollywood'><button>Go back</button></Link>
    </>
  )
}

export default OnClick