import { Layout } from "@/components/layout";
import "../styles/globals.css";
import {store} from '../lib/store'
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Provider store={store}>
      <Component   {...pageProps} />
      </Provider>
    </Layout>
  );
}
