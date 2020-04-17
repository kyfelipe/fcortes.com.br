import React from 'react'

import Layout from '../layouts/page'
import SEO from '../components/seo'

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title={`Blog`}
        description={``}
        keywords={[`gatsby`, `application`, `react`]}
      />
      {/*<div>*/}
      {/*  <h1>*/}
      {/*    Titulo*/}
      {/*  </h1>*/}
      {/*  <p>*/}
      {/*    Texto 1*/}
      {/*  </p>*/}
      {/*  <p>*/}
      {/*    Texto 2*/}
      {/*  </p>*/}
      {/*</div>*/}
    </Layout>
  );
}

export default IndexPage;
