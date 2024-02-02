import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

export const Master = (props) => {
  return (
    <div>
      <Header />
      <props.Man></props.Man>
      <Footer />

    </div>
  )
}
