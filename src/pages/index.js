import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import One from "../components/effectOne"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <One />
    <Link to="/page-2/">Go to effects 2</Link>
  </Layout>
)

export default IndexPage
