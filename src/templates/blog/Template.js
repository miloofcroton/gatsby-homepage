import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import { Link } from 'gatsby';
import Content from '../../components/Content';
import { StyledList } from '../../styles/Lists';
import styled from 'styled-components';

const TagDiv = styled.div`
  margin-top: 4rem;
`;

const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section>
      {helmet || ''}
      <h1>{title}</h1>
      <p>{description}</p>
      <PostContent content={content} />
      {tags && tags.length ? (
        <TagDiv>
          <h4>Tags</h4>
          <StyledList>
            {tags.map(tag => (
              <li key={tag + 'tag'}>
                <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
              </li>
            ))}
          </StyledList>
        </TagDiv>
      ) : null}
    </section>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

export default BlogPostTemplate;
