import React from 'react'
import { useRef } from 'react'

const ScrollToTop = () => {
    const containerRef = useRef(null);

    const scrollTop = () => {
        containerRef.current.scrollTop = 0;
    }

  return (
    <div style={{height: '400px', overflow: 'auto'}} ref={containerRef}>
        <div style={{height: '1000px'}}>
            <button onClick={scrollTop} className='fixed border p-2 bg-teal-600'>Scroll To Top</button>
        </div>
    </div>
  )
}

export default ScrollToTop