import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import TagManager from 'react-gtm-module';
import Config from '../next.config';
import Layout from '../components/Layout';
import store from '../store';

import 'tailwindcss/tailwind.css';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css';

const tagManagerArgs = {
  id: Config.env.GOOGLE_TAG_MANAGER
};

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (Config.env.IS_LIVE) {
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
