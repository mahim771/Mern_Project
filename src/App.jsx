import React from 'react'
import Scroll from './Components/ScrollIndicator/Scroll'

export default function App() {
  return (
    <div>
      <Scroll url={'https://dummyjson.com/products?limit=120'}/>
    </div>
  )
}
