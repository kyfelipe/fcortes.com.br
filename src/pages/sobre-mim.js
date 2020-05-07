import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../layouts/page'
import SEO from '../components/seo'
import Main from '../styles/main'
import Social from '../components/Social'

import * as S from '../styles/about-me'

const SobreMim = () => {
  const { authorImage } = useStaticQuery(
    graphql`
      query {
        authorImage: file(relativePath: { eq: "profile.png" }) {
          childImageSharp {
            fixed(width: 130, height: 130) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  );

  return (
    <Layout>
      <SEO
        title={`Sobre mim`}
        description={`Saiba um pouco mais sobre o desenvolvedor deste blog.`}
        keywords={[`felipe`, `felipe côrtes`, `blog`, `devops`]}
      />
      <Main>
        <S.Title>Sobre Mim</S.Title>
        <S.HeadWrapper>
          <S.ProfileImageWrapper>
            <S.ProfileImage fixed={authorImage.childImageSharp.fixed} />
          </S.ProfileImageWrapper>
          <S.SocialAboutMe>
            <Social />
          </S.SocialAboutMe>
          <S.TextHeaderWrapper>
            <S.AuthorText>Felipe Côrtes, 21 anos </S.AuthorText>
            <S.Text>Estudante de Sistemas de Informação, com previsão de conclusão para 2021. Amo e atuo no setor de DevOps, atualmente como Estagiário na Vertigo Tecnologia. Também possuo interesse em Angular e Java, tendo exercido a função de estagiário na equipe de desenvolvimento da Credilink.</S.Text>
          </S.TextHeaderWrapper>
        </S.HeadWrapper>
        <S.Text>Me considero comunicativo, proativo, trabalho bem em equipe e anseio por aprimorar cada vez mais as minhas habilidades e aptidões. Criei este blog com o objetivo de compartilhar meus conhecimentos sobre DevOps de maneira descomplicada e direta para quem estuda, trabalha ou é entusiasta pela área.</S.Text>
        <S.Text className="bold">Minhas principais habilidades são:</S.Text>
        <S.ListWrapper>
          <S.ListItem>AWS (Amazon Web Services)</S.ListItem>
          <S.ListItem>Docker</S.ListItem>
          <S.ListItem>Kubernetes</S.ListItem>
          <S.ListItem>Gitlab CI/CD</S.ListItem>
          <S.ListItem>Terraform</S.ListItem>
        </S.ListWrapper>
      </Main>
    </Layout>
  )
}

export default SobreMim;
