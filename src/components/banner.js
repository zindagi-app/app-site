import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      githublogo: file(relativePath: { eq: "githublogo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      linkedinlogo: file(relativePath: { eq: "linkedinlogo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div id="home" className="banner">
      <div className="container">
        <div className="row">
          <div className="main-text">زندگی</div>
          <div className="desc">
            <p>
              Become a part of <b>suicide prevention</b> and{" "}
              <b>mental health awareness</b> in <b>Pakistan</b> with{" "}
              <b>Zindagi</b>.
            </p>
            <div className="bannerlinks">
              <div className="github">
                <Link to="https://github.com/zindagi-app">
                  <Img fluid={data.githublogo.childImageSharp.fluid} />
                </Link>
              </div>
              <div className="linkedin">
                <Link to="https://www.linkedin.com/company/zindagi-pak">
                  <Img fluid={data.linkedinlogo.childImageSharp.fluid} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
