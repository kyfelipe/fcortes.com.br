import React from 'react'

import Layout from '../layouts/page'
import SEO from '../components/seo'

import * as S from '../styles/404'

const NotFoundPage = () => (
  <Layout>
    <SEO
      title={`404: Página não encontrada`}
    />
    <S.NotFoundWrapper>
      <S.Title>404</S.Title>
      <S.SubTitle>Página não encontrada</S.SubTitle>
      <S.BackHome to="/">Voltar ao início</S.BackHome>
    </S.NotFoundWrapper>
  </Layout>
)

export default NotFoundPage
