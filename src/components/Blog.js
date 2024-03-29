import React from "react"
import PropTypes from "prop-types"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { Link } from "gatsby"
const Blog = ({ id, title, image, date, category, slug, desc }) => {
  const blogImage = getImage(image.localFile.childImageSharp.gatsbyImageData)

  return (
    <Link to={`/blogs/${slug}`} className="blog" key={id}>
      <article>
        {blogImage && (
          <GatsbyImage image={blogImage} alt={"Blog"} className="blog-img" />
        )}
        <div className="blog-card">
          <h4>{title}</h4>
          <p>{desc}</p>
          <div className="blog-footer">
            <p>{category}</p>
            <p>{date}</p>
          </div>
        </div>
      </article>
    </Link>
  )
}

Blog.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
}

export default Blog
