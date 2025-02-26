import React, { useState } from 'react'
import ProductForm from './CreateStock'
import GetStock from './GetStock'

const Inventory = () => {
  return (
    <div className='flex'>
        
      {/* <ProductForm></ProductForm> */}
      
      <GetStock></GetStock>
      
    </div>
  )
}

export default Inventory
