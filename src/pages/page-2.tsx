// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Two from "../components/effectTwo"

const SecondPage = (props: PageProps) => (
  <Layout>
    <SEO title="Page two" />
    <Two />
  </Layout>
)

export default SecondPage
