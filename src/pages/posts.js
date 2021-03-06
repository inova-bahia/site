import React from 'react';

import Layout from '../components/Layout';
import Posts from '../components/Posts';
import SEO from '../components/SEO';

function PagePosts() {
  return (
    <Layout>
      <SEO title="Postagens" />
      <Posts />
    </Layout>
  );
}

export default PagePosts;
