import React from "react"
import { FaCode, FaSketch, FaAndroid } from "react-icons/fa"
export default [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "web development",
    text: `I have made several web apps to solve different kind of problems. Currently working mostly with React and Nextjs (which in my opinion is the future of React!), GraphQL (which is a great query language for APIs), and non-relational databases (MongoDB, Firestore, DynamoDB). I like to combine those with Tailwind CSS. I am comfortable in both front and backend development`,
  },
  {
    id: 2,
    icon: <FaAndroid className="service-icon" />,
    title: "mobile development",
    text: `I have some experience developing apps, mostly with React Native. (See "CGS app" on the list of projects)`,
  },
  {
    id: 3,
    icon: <FaSketch className="service-icon" />,
    title: "Others",
    text: `I am constantly updating my skill set and keeping a close eye on new tech. Right now, I am learning about Serverless Architectures, playing with Firebase and AWS services.`,
  },
]
