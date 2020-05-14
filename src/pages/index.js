import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Two from "../components/effectTwo"
import One from "../components/effectOne"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Two />
    <One />
  </Layout>
)

export default IndexPage
