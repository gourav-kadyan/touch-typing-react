import React from 'react'
import { Link } from 'react-router-dom'
import Home from './Home'
import Practice from './Practice'
import Result from './Result'
import About from './About'

const Navigation = () => {
  return (
    <>
        <Link to='/' >{Home}</Link>
        <Link to='/practice'>{Practice}</Link>
        <Link to='/result'>{Result}</Link>
        <Link to='/about'>{About}</Link>
    </>
  )
}

export default Navigation