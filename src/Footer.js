import React from 'react'

const Footer = ({list}) => {
  return (
    <div className='footer'>The List Has {list.length} {list.length>=2?"elements":"element"}</div>
  )
}

export default Footer