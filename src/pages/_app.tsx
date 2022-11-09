import type { AppProps } from 'next/app'
import { Header } from "../components/Header/index"

import '../styles/global.scss'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Header />
    <Component {...pageProps} />
    </>
  ) 
}