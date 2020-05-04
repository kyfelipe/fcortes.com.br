import React from 'react'
import PropTypes from 'prop-types'

// https://www.gatsbyjs.org/docs/custom-html/
export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      {props.headComponents}
    </head>
      <body {...props.bodyAttributes} className="light">
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              window.__onThemeChange = function() {};
              
              function setTheme(newTheme) {
                window.__theme = newTheme;
                preferredTheme = newTheme;
                document.body.className = newTheme;
                window.__onThemeChange(newTheme);
              }
              
              var preferredTheme;
              try {
                preferredTheme = localStorage.getItem('theme');
              } catch (err) { }
              
              window.__setPreferredTheme = function(newTheme) {
                setTheme(newTheme);
                try {
                  localStorage.setItem('theme', newTheme);
                } catch (err) {}
              }
              
              setTheme(preferredTheme || 'light');
              
              window.__onFontSizeChange = function() {};
              
              function setFontSize(newFontSize) {
                window.__fontSize = newFontSize;
                preferredFontSize = newFontSize;
                
                postBody = document.getElementById("post_body");
                postBody.classList.remove('normal');
                postBody.classList.remove('small');
                postBody.classList.remove('large');
                postBody.classList.add(newFontSize);
                
                postTitle = document.getElementById("post_title");
                postTitle.classList.remove('normal');
                postTitle.classList.remove('small');
                postTitle.classList.remove('large');
                postTitle.classList.add(newFontSize);
                
                postDescription = document.getElementById("post_description");
                postDescription.classList.remove('normal');
                postDescription.classList.remove('small');
                postDescription.classList.remove('large');
                postDescription.classList.add(newFontSize);
                
                fontSmall = document.getElementById("font_small");
                fontNormal = document.getElementById("font_normal");
                fontLarge = document.getElementById("font_large");
                fontSmall.classList.remove('active');
                fontNormal.classList.remove('active');
                fontLarge.classList.remove('active');
                
                font = document.getElementById("font_" + newFontSize);
                font.classList.add('active');
                
                window.__onFontSizeChange(newFontSize);
              }
              
              var preferredFontSize;
              try {
                preferredFontSize = localStorage.getItem('font_size');
              } catch (err) { }
              
              window.__setPreferredFontSize = function(newFontSize) {
                setFontSize(newFontSize);
                try {
                  localStorage.setItem('font_size', newFontSize);
                } catch (err) {}
              }
              
              function getFontSize() {
                return preferredFontSize;
              }
              
              setFontSize(preferredFontSize || 'normal');
            })();
            `,
        }}
      />
      {props.preBodyComponents}
      <noscript key="noscript" id="gatsby-noscript">
        This app works best with JavaScript enabled.
      </noscript>
      <div
        key={`body`}
        id="___gatsby"
        dangerouslySetInnerHTML={{ __html: props.body }}
      />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
