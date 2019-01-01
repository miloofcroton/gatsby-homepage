import React from 'react';
// import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Profile from './profile';
import Projects from './projects';

const WorkWrapper = styled.section`
  display: grid;
  grid-template-columns: 70% 30%;
  margin-top: 20px;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
  max-height: 1000px;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

const Work = ({ children }) => {

  return (
    <StaticQuery
      query={graphql`
        query WorkIndexQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "work" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 100)
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  templateKey
                  date(formatString: "MMMM DD, YYYY")
                }
              }
            }
          }
        }
      `}
      render={data => {
        const { edges: posts } = data.allMarkdownRemark;
        return (
          <WorkWrapper>
            <Projects
              posts={posts}
            >
              {children}
            </Projects>
            <Profile />
          </WorkWrapper>
        );
      }}
    />
  );
};

export default Work;

// export const pageQuery = graphql`

// `;
