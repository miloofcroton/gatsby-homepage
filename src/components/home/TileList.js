import React, { Fragment } from 'react';
import TileCard from './TileCard';
import { withPrefix } from 'gatsby';

const links = [
  {
    to: '/work',
    src: withPrefix('/categories/code.jpg'),
    alt: 'code',
    text: 'Work',
  },
  {
    to: '/play',
    src: withPrefix('/categories/nature.jpg'),
    alt: 'nature',
    text: 'Play',
  },
  {
    to: '/thoughts',
    src: withPrefix('/categories/thinker.jpg'),
    alt: 'thinker',
    text: 'Thoughts',
  }
];

const TileList = () => {

  const tiles = links.map(details => <TileCard key={details.text} details={details} />);

  return (
    <Fragment>
      {tiles}
    </Fragment>
  );
};

export default TileList;
