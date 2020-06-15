import React from 'react';

import Layout from '../components/Layout';
import Home from '../components/Home';
import SEO from '../components/SEO';

function PageHome() {
  return (
    <Layout>
      <SEO title="Inicio" />
      <Home />
    </Layout>
  );
}

export default PageHome;
