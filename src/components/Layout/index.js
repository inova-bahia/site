import React from 'react';
import 'typeface-muli';

import GlobalStyles from '../../styles/global';
import Header from '../Header';
import Footer from '../Footer';

function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
