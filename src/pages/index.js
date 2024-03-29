import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import SEO from "../components/SEO"
export default ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
    allStrapiBlogs: { nodes: blogs },
  } = data

  return (
    <Layout>
      <SEO title="Home" description="This is Matias Massetti's home page" />
      <Hero />
      <Services />
      <Jobs />
      <Projects projects={projects} title="featured projects" showLink />
      {/* <Blogs blogs={blogs} title="Latest articles" showLink /> */}
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects(
      filter: { featured: { eq: true } }
      sort: { fields: order, order: DESC }
    ) {
      nodes {
        description
        url
        github
        id
        title
        image {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        stack {
          id
          title
        }
        order
      }
    }
    allStrapiBlogs(sort: { fields: date, order: DESC }, limit: 3) {
      nodes {
        slug
        content
        description
        date(formatString: "MMMM Do, YYYY")
        id
        title
        category
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
