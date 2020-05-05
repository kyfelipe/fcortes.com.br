import React from 'react'

import Layout from '../layouts/page'
import SEO from '../components/seo'
import Main from '../styles/main'
import Social from '../components/Social'

import * as S from '../styles/about-me'

const SobreMim = () => {
  return (
    <Layout>
      <SEO
        title={`Sobre mim`}
        description={`Saiba um pouco mais sobre o desenvolvedor deste blog.`}
        keywords={[`felipe`, `felipe côrtes`, `blog`, `devops`]}
      />
      <Main>
        <S.TitleWrapper>
          <S.Title>Sobre Mim</S.Title>
          <S.SocialAboutMe>
            <Social />
          </S.SocialAboutMe>
        </S.TitleWrapper>
        <S.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</S.Text>
        <S.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</S.Text>
      </Main>
    </Layout>
  )
}

export default SobreMim;
