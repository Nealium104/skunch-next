import React from 'react'
import { UserProvider } from '@auth0/nextjs-auth0/client'
import '@/styles/globals.css'
import { Oswald } from '@next/font/google'

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
})

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <main className={`${oswald.variable}`}>
          <Component {...pageProps} />
      </main>
    </UserProvider>
    )
}
