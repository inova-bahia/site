import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not Found" />
      <p>Ops, pagina não encontrada</p>
    </Layout>
  );
}

export default NotFoundPage;
