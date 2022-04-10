import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import TagManager from 'react-gtm-module';
import { GOOGLE_TAG_MANAGER, IS_LIVE } from '../constants';
import Layout from '../components/Layout';
import store from '../store';

import 'tailwindcss/tailwind.css';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css';

const tagManagerArgs = {
  id: GOOGLE_TAG_MANAGER
};

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (IS_LIVE) {
      TagManager.initialize(tagManagerArgs);
    }
  }, []);

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
