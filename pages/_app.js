import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import TagManager from 'react-gtm-module';
import { GOOGLE_TAG_MANAGER_ID, GOOGLE_TAG_MANAGER_AUTH, GOOGLE_TAG_MANAGER_PREVIEW, IS_LIVE } from '../constants';
import Layout from '../components/Layout';
import store from '../store';

import 'tailwindcss/tailwind.css';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css';

const tagManagerArgs = {
  gtmId: GOOGLE_TAG_MANAGER_ID,
  auth: GOOGLE_TAG_MANAGER_AUTH,
  preview: GOOGLE_TAG_MANAGER_PREVIEW
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
