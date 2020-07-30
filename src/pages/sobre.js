import React from 'react';
import Layout from '../components/Layout';
import Sobre from '../components/Sobre';
import SEO from '../components/SEO';

function SobrePage() {
  return (
    <Layout>
      <SEO title="Sobre" />
      <Sobre />
    </Layout>
  );
}

export default SobrePage;
