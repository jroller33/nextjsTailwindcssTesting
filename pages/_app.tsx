import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

import { Roboto } from "next/font/google";


export default function App({ Component, pageProps }: AppProps) {


  return (
    <div>


      <Component {...pageProps} />
    </div>
  )
}
