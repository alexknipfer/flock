import Navigaton from '../Navigation/Navigation'
import React from 'react'

const Layout = ({ children }) => {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  )
}
