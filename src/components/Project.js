import React from "react"
import PropTypes from "prop-types"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
const Project = ({
  description,
  title,
  github,
  stack,
  url,
  image,
  index,
  order,
}) => {
  const projectImage = getImage(image.localFile.childImageSharp.gatsbyImageData)

  return (
    <article className="project">
      {projectImage && (
        <GatsbyImage
          image={projectImage}
          alt={"Project"}
          className="project-img"
        />
      )}
      <div className="project-info">
        <span className="project-number">0{index + 1}.</span>
        <h3>{title}</h3>
        <p className="project-desc">{description}</p>
        <div className="project-stack">
          {stack.map(item => {
            return <span key={item.id}>{item.title}</span>
          })}
        </div>
        <div className="project-links">
          {github && (
            <a href={github} target="_blank" rel="noopener">
              <FaGithubSquare className="project-icon" />
            </a>
          )}

          {url && (
            <a href={url} target="_blank" rel="noopener">
              <FaShareSquare className="project-icon" />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  stack: PropTypes.arrayOf(PropTypes.object).isRequired,
  order: PropTypes.number.isRequired,
}

export default Project
