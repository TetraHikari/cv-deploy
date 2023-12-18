import React from 'react'
import AnimatedCursor from "react-animated-cursor"

function AnimateCursor() {
  return (
    <AnimatedCursor 
    innerSize = { 8 }
    outerSize = { 80 }
    color = '000, 000, 000'
    outerAlpha = {0.1}
    innerScale = {0.7}
    outerScale = {1.5}
    clickables={[
      'a',
      'input[type="text"]',
      'input[type="email"]',
      'input[type="number"]',
      'input[type="submit"]',
      'input[type="image"]',
      'label[for]',
      'textarea',
      'button',
      '.link'
    ]}
    >
    </AnimatedCursor>
  )
}

export default AnimateCursor