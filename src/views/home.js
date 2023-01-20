import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Vigorous Feline Gnat</title>
        <meta property="og:title" content="Vigorous Feline Gnat" />
      </Helmet>
      <img
        alt="image"
        src="https://play.teleporthq.io/static/svg/default-img.svg"
        className="home-image"
      />
      <h1>Heading</h1>
    </div>
  )
}

export default Home
