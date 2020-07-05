import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  {
    allStrapiJobs(sort: { fields: order, order: DESC }) {
      edges {
        node {
          company
          date
          desc {
            id
            name
          }
          position
        }
      }
    }
  }
`

const Jobs = () => {
  return <h2>jobs component</h2>
}

export default Jobs
