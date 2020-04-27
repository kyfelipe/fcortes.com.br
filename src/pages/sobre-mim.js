import React from 'react'
import Layout from "../layouts/page"
import SEO from "../components/seo"

const SobreMim = () => {
  return (
    <Layout>
      <SEO
        title={`Sobre mim`}
        description={`Saiba um pouco mais sobre o desenvolvedor deste blog.`}
        keywords={[`felipe`, `felipe côrtes`, `blog`, `devops`]}
      />
      <h1>Sobre Mim</h1>
    </Layout>
  )
}

export default SobreMim;
