import React from "react"
import { FaCode, FaSketch, FaAndroid } from "react-icons/fa"
export default [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "web development",
    text: `I have made several web apps to solve different kind of problems. Currently working mostly with React, NodeJS and MongoDB. I am comfortable in both front and backend development`,
  },
  {
    id: 2,
    icon: <FaAndroid className="service-icon" />,
    title: "mobile development",
    text: `I have some experience developing Android apps. Currently working in React Native.`,
  },
  {
    id: 3,
    icon: <FaSketch className="service-icon" />,
    title: "Others",
    text: `I am constantly updating my skill set and keeping a close eye on new tech. Right now, I am learning about Serverless Architectures, playing with Firebase and AWS. I am also trying out NextJS, which in my opinion is the future of React!. Lastly, I am learning Graphql, which is a great query language for APIs.`,
  },
]
