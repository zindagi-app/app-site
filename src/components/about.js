import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      phone: file(relativePath: { eq: "phone.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      contact: file(relativePath: { eq: "contact.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      info: file(relativePath: { eq: "info.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div class="container">
      <div id="aboutlink" class="aboutpg">
        <div class="title">About زندگی</div>
        <div class="englishdesc">
          With the increasing accessibility of smartphones, to all classes of
          the Pakistani society- we believe it is essential for there to be an
          application that compensates for the attention that is lacking towards
          individuals in the Pakistani society that cannot express themselves
          and their feelings in fear of being judged, punished or simply not
          taken seriously. This app aims to link the user to helplines,
          websites, emergency contacts, information, advice pages etc. in order
          to maximise user well-being.
        </div>
        <div className="engfeatures">
          <div className="featurestitle">Prospective Features</div>
          <div className="helpline">
            <div className="helplineimg">
              <Img fluid={data.phone.childImageSharp.fluid} />
            </div>
            <div className="helplinetitle">Helpline</div>
            <div className="helplinedesc">
              Connect to a free emergency helpline immediately.
            </div>
          </div>

          <div className="contact">
            <div className="contactimg">
              <Img fluid={data.contact.childImageSharp.fluid} />
            </div>
            <div className="contacttitle">Emergency Contacts</div>
            <div className="contactdesc">
              Have a list of emergency contacts available at all times.
            </div>
          </div>
          <div className="info">
            <div className="infoimg">
              <Img fluid={data.info.childImageSharp.fluid} />
            </div>
            <div className="infotitle">Info and Advice</div>
            <div className="infodesc">
              Learn more, seek advice, raise awareness and self-diagnose.
            </div>
          </div>
        </div>

        <div className="urdufirst">
          <b>Urdu-first</b> UI. Available cross-platform using{" "}
          <b>React Native. </b>
        </div>
        <div className="teambtn">
          <Link to="/#contribute">
            <div className="contributebtn">Contribute to our Team</div>
          </Link>
          <Link to="/#contribute">
            <div className="updatedbtn">Stay Updated and Reach Out</div>
          </Link>
          <Link
            to="https://github.com/zindagi-app
            "
          >
            <div className="opensrcbtn">Join our Open-Source</div>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default About
