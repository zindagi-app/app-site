import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import "../styles/styles.scss"
import Image from "../components/image"
import Banner from "../components/banner"
import About from "../components/about"
import Contribute from "../components/contribute"
import Download from "../components/download"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const IndexPage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <About />
      <Contribute />
      <Download />
    </div>
  )
}
export default IndexPage
