import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const Navigate = useNavigate();
    const about = () => {
        Navigate('/about');
    }
    const practice = () => {
        Navigate('/practice');
    }

  return (
    <div className='Home-Main-Wrapper'>
        <h1>Touch Typing</h1>
        <h3>Unlock your full typing potential and boost your productivity with the transformative skill of touch typing.</h3>
        <button onClick={practice}>Try Touch Typing</button>
        <div>
            <h3>Still Confuse why Touch Typing then</h3>
            <button onClick={about}>Click Me</button>
        </div>
    </div>
  )
}

export default Home