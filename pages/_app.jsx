import '@/styles/globals.css'
import { ClerkProvider } from "@clerk/nextjs"
import Layout from '@/components/Layout'

export default function App({ Component, pageProps }) {
  return (
    <ClerkProvider {...pageProps}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ClerkProvider>
  )
}
