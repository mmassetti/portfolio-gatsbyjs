import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import ReactMarkdown from "react-markdown"
import SEO from "../components/SEO"
//
const About = ({
  data: {
    about: { nodes },
  },
}) => {
  const { info, stack, title, image } = nodes[0]

  const aboutImage = getImage(
    image?.localFile?.childImageSharp?.gatsbyImageData
  )

  return (
    <Layout>
      <SEO title="About" description="about Matias Massetti" />
      <section className="about-page">
        <div className="section-center about-center">
          <GatsbyImage
            image={aboutImage}
            alt={"Universidad Nacional del Sur"}
            className="about-img"
          />
          <article className="about-text">
            <Title title={title} />
            {/* <p>{info}</p> */}
            {/* <ReactMarkdown source={info} /> */}

            <div className="about-stack">
              {stack.map(item => {
                return <span key={item.id}>{item.title}</span>
              })}
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    about: allStrapiAbout {
      nodes {
        stack {
          id
          title
        }
        title
        info
        image {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`

export default About
