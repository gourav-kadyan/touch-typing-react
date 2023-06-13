import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {

    const navigate = useNavigate();
    const home = () => {
        navigate('/')
    }
  return (
    <div>


        <button onClick={home}>Go To Home</button>
    </div>
  )
}

export default About