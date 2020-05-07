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
      <S.Coffee>
        <S.CoffeeHeader>
          <S.CoffeeHeaderButtons className="one" />
          <S.CoffeeHeaderButtons className="two" />
          <S.CoffeeHeaderButtonsDisplay />
          <S.CoffeeHeaderButtonsDetails />
        </S.CoffeeHeader>
        <S.CoffeeBody>
          <S.CoffeeBodyExit />
          <S.CoffeeBodyArm />
          <S.CoffeeBodyLiquid />
          <S.CoffeeBodySmoke className="one" />
          <S.CoffeeBodySmoke className="two" />
          <S.CoffeeBodySmoke className="three" />
          <S.CoffeeBodySmoke className="four" />
          <S.CoffeeBodySmokeCup />
        </S.CoffeeBody>
        <S.CoffeeFooter />
      </S.Coffee>
      <S.BackHome to="/">Voltar ao início</S.BackHome>
    </S.NotFoundWrapper>
  </Layout>
)

export default NotFoundPage
