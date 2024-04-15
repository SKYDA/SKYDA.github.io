import SEO from '../next-seo.config';
import '../styles/globals.css'
import Layout from '../components/layout/layout'
import { DefaultSeo } from 'next-seo';
import { MDXProvider } from '@mdx-js/react'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <MDXProvider>
        <Layout>
          <DefaultSeo {...SEO} />
          <Component {...pageProps} />
        </Layout>
      </MDXProvider>
    </>
  )
}

export default MyApp
